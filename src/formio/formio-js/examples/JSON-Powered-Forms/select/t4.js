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
 * HTML5 wedgit
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: "select",
                        label: "Single Select",
                        key: "html5select",
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
                        /**
                         * 默认 Choices.js 做 select 控件
                         * HTML5 Widget
                         Using the widget parameter, you can use the regular HTML5 select widget over the Choices.js widget.
                         *
                         */
                        widget: 'html5',
                        template: "<span>{{ item.label }}</span>",
                        input: true
                    },
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
                        input: true,
                        widget: 'html5',
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
                        input: true,
                        /**
                         * 单选没什么区别
                         * 多选，效果不好看
                         */
                        widget: 'html5',
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
                <h2>t4 - html5 wegdit - JSON Powered Forms - examples - formio.js</h2>
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