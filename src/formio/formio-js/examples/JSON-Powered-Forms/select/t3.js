import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/select.html
 * * 用json数据渲染构建表单
 * copy from t2.js
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
                    },
                    /**
                     * searchField
                     *
                     */
                    {
                        type: 'select',
                        label: 'Customer',
                        key: 'customer',
                        placeholder: 'Select a customer',
                        dataSrc: 'url',
                        /**
                         * searchField 发起带查询参数的url请求，根据用户输入的email地址，返回显示姓名
                         * https://examples.form.io/customer/submission?data.email=joe%40example.com
                         * https://examples.form.io/customer/submission
                         * 返回数据json：
                         * [
                         *  {
                         *      access: []
                                created: "2018-01-08T23:02:47.012Z"
                                data: {
                                    firstName: "Joe",
                                    lastName: "Smith",
                                    status: "inactive",
                                    email: "joe@example.com",
                                    submit: true
                                }
                                externalIds: []
                                form: "5a53f887c8930000010f8b22"
                                modified: "2019-02-01T16:12:10.888Z"
                                owner: "553dbfc08d22d5cb1a7024f2"
                                project: "5692b91fd1028f01000407e3"
                                roles: []
                                state: "submitted"
                                _fvid: 0
                                _id: "5a53f8970dc919000194ab6a"
                                _vid: 0
                         *  },
                         *  {
                         *      access: []
                                created: "2018-01-08T23:03:19.473Z"
                                data: {firstName: "Jane", lastName: "Doe", status: "active", email: "jane@example.com", submit: true}
                                externalIds: []
                                form: "5a53f887c8930000010f8b22"
                                modified: "2019-02-01T16:11:57.139Z"
                                owner: "553dbfc08d22d5cb1a7024f2"
                                project: "5692b91fd1028f01000407e3"
                                roles: []
                                state: "submitted"
                                _fvid: 0
                                _id: "5a53f8b744398b0001023eaf"
                                _vid: 0
                         *  },
                         *  {
                         *      access: []
                                created: "2018-01-08T23:03:09.730Z"
                                data: {firstName: "Sally", lastName: "Tanner", status: "active", email: "sally@example.com", submit: true}
                                externalIds: []
                                form: "5a53f887c8930000010f8b22"
                                modified: "2019-02-01T16:12:01.781Z"
                                owner: "553dbfc08d22d5cb1a7024f2"
                                project: "5692b91fd1028f01000407e3"
                                roles: []
                                state: "submitted"
                                _fvid: 0
                                _id: "5a53f8ad0dc919000194ab6b"
                                _vid: 0
                         *  },
                         *  {
                         *      access: []
                                created: "2018-01-08T23:02:56.484Z"
                                data: {firstName: "Bob", lastName: "Thompson", status: "inactive", email: "bob@example.com", submit: true}
                                externalIds: []
                                form: "5a53f887c8930000010f8b22"
                                modified: "2019-02-01T16:12:06.618Z"
                                owner: "553dbfc08d22d5cb1a7024f2"
                                project: "5692b91fd1028f01000407e3"
                                roles: []
                                state: "submitted"
                                _fvid: 0
                                _id: "5a53f8a044398b0001023eab"
                                _vid: 0
                         *  }
                         * ]
                         */
                        data: {
                            url: 'https://examples.form.io/customer/submission'
                        },
                        valueProperty: 'data.email',
                        searchField: 'data.email',
                        lazyLoad: true,
                        template: '<span>{{ item.data.firstName }} {{ item.data.lastName }}</span>'
                    }
                ]
            }
        ).then(function(instance) {
            console.log('then instance:', instance);
            /**
             * 设置默认搜索参数email
             */
            instance.submission = {
                data: {
                    customer: 'joe@example.com'
                }
            };

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
                <h2>t3 - lazy load & searchField - select - JSON Powered Forms - examples - formio.js</h2>
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