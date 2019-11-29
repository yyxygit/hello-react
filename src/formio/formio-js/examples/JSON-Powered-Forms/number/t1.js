import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/calculated.html
 * 用json数据渲染构建表单
 * 根据表单输入值，计算值
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: 'number',
                        label: 'A',
                        key: 'a',
                        input: true,
                        inputType: 'text',
                        multiple: true,
                        prefix: '+',
                        validate: {
                            min: 2,
                            max: 100,
                            step: 1
                        }
                    },
                    {
                        type: 'htmlelement',
                        tag: 'p',
                        className: 'text-center',
                        content: '———— X ————'
                    },
                    {
                        type: 'number',
                        label: 'B',
                        key: 'b',
                        input: true,
                        inputType: 'text',
                        multiple: true,
                        prefix: '+',
                        validate: {
                            min: 2,
                            max: 100,
                            step: 1
                        }
                    },
                    {
                        type: 'textfield',
                        label: 'Total',
                        key: 'total',
                        input: true,
                        inputType: 'text',
                        disabled: true,
                        /**
                         * 在 http://localhost:3000/basic/examples/builder-render-submission/hello
                         * 中用builder text field - Data - Caculated value - JSON logic
                         * 输入如下规则：
                         * {
                            "*": [
                                {
                                  "_sum": {
                                    "var": "data.a"
                                  }
                                },
                                {
                                  "_sum": {
                                    "var": "data.b"
                                  }
                                 }
                              ]
                            }
                         * 可以达成一样效果，注意不能用单引号包裹字符串，var 操作符也需要加引号
                         */
                        calculateValue: {
                            "*": [
                                {"_sum": {var: 'data.a'}},
                                {"_sum": {var: 'data.b'}}
                            ]
                        }
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
                <h2>t1 - Caculated Values - Number - JSON Powered Forms - examples - formio.js</h2>
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