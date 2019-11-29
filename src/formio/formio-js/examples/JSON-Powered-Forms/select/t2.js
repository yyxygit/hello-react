import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/select.html
 * * 用json数据渲染构建表单
 * copy from t1.js
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: 'textfield',
                        key: 'firstName',
                        label: 'First Name',
                        placeholder: 'Enter your first name.',
                        input: true,
                        validate: {
                            required: true
                        }
                    },
                    {
                        type: "select",
                        label: "Single Select",
                        key: "single",
                        placeholder: "Select one",
                        data: {
                            values: [
                                {value: 'apple', label: 'Apple'},
                                {value: 'banana', label: 'Banana'},
                                {value: 'pear', label: 'Pear'},
                                {value: 'orange', label: 'Orange'}
                            ]
                        },
                        dataSrc: "values",
                        defaultValue: 'banana',
                        template: "<span>{{ item.label }}</span>",
                        input: true
                    },
                    {
                        type: "select",
                        label: "Select JSON",
                        key: "selectjson",
                        placeholder: "Select one",
                        data: {
                            json: `[
          {"value":"a","label":"A"},
          {"value":"b","label":"B"},
          {"value":"c","label":"C"},
          {"value":"d","label":"D"}
        ]`
                        },
                        dataSrc: "json",
                        template: "<span>{{ item.label }}</span>",
                        input: true
                    },
                    {
                        type: "select",
                        label: "Favorite Things",
                        key: "favoriteThings",
                        placeholder: "These are a few of your favorite things...",
                        data: {
                            values: [
                                {
                                    value: "raindropsOnRoses",
                                    label: "Raindrops on roses"
                                },
                                {
                                    value: "whiskersOnKittens",
                                    label: "Whiskers on Kittens"
                                },
                                {
                                    value: "brightCopperKettles",
                                    label: "Bright Copper Kettles"
                                },
                                {
                                    value: "warmWoolenMittens",
                                    label: "Warm Woolen Mittens"
                                }
                            ]
                        },
                        dataSrc: "values",
                        template: "<span>{{ item.label }}</span>",
                        multiple: true,
                        input: true
                    },
                    /**
                     * external select source
                     */
                    {
                        type: 'select',
                        label: 'Model',
                        key: 'model',
                        placeholder: 'Select your model',
                        dataSrc: 'url',
                        defaultValue: 'Pilot',
                        data: {
                            /**
                             * 开放API
                             * 返回json数据：
                             * {
                             *     Count: 842,
                             *     SearchCriteria: "Make:honda",
                             *     Message: "Response returned successfully",
                             *     Results: [
                             *         {
                             *              Make_ID: 474
                                            Make_Name: "Honda"
                                            Model_ID: 1861
                                            Model_Name: "Accord"
                             *         },
                             *         {
                             *              Make_ID: 474
                                            Make_Name: "Honda"
                                            Model_ID: 1863
                                            Model_Name: "Civic"
                             *         },
                             *         ...
                             *     ]
                             * }
                             * Make_Name = honda 的所有型号
                             */
                            url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json'
                        },
                        valueProperty: 'Model_Name',
                        template: '<span>{{ item.Model_Name }}</span>',
                        selectValues: 'Results'
                    },
                    {
                        type: 'select',
                        label: 'Model Lazy',
                        key: 'model-lazy',
                        placeholder: 'Select your model',
                        dataSrc: 'url',
                        defaultValue: 'Pilot',
                        data: {
                            url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json'
                        },
                        valueProperty: 'Model_Name',
                        /**
                         * 懒加载，好像没啥区别
                         */
                        lazyLoad: true,
                        template: '<span>{{ item.Model_Name }}</span>',
                        selectValues: 'Results'
                    }
                ]
            }
        ).then(function(instance) {
            console.log('then instance:', instance);

            const formJson =
                document.getElementById('formData');
            formJson.innerHTML = '';
            formJson.appendChild(
                document.createTextNode(
                    JSON.stringify(
                        instance['_form'],
                        null,
                        4
                    )
                )
            );

            instance.on('change', function (event) {
                console.log('change event:', event);

                const submitData =
                    document.getElementById('submissionData');
                submitData.innerHTML = '';
                submitData.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                            instance['_submission'],
                            null,
                            4
                        )
                    )
                );
            });

        });
    }

    render() {
        return (
            <div className="container">
                <h2>t2 - external-source - select - JSON Powered Forms - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h3>instance['_form']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="formData"></pre>
                </div>
                <h3>instance['_submission']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="submissionData"></pre>
                </div>
            </div>
        );
    }

}

export default JsonPoweredForms;