import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../../../css/examples/btn1.css';


/**
 * http://formio.github.io/formio.js/app/examples/json.html
 * 用json数据渲染构建表单
 * copy from
 * src/formio/formio-js/examples/JSON-Powered-Forms/t1.js
 * 在text field 单个表单字段下，添加 submit & reset button
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
                        type: 'button',
                        action: 'submit',
                        label: 'Submit',
                        theme: 'primary',
                        customClass: 'cBtnSubmit',
                    },
                    {
                        type: 'button',
                        action: 'reset',
                        label: 'Reset Form',
                        theme: 'success'
                    }
                ]
            },
            {
                /**
                 * https://github.com/formio/formio.js/wiki/Form-Renderer
                 * noAlerts
                 * If the form should not render the alerts dialog on top of the form.
                 * Pass "true" to disable.
                 * 表单提交或错误信息提示框，true隐藏不显示
                 */
                noAlerts: true,
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

            /**
             * 组织提交到form.io服务器
             * https://formio.github.io/formio.js/app/examples/customendpoint.html
             * 经测试，可能只是不向formio发送请求，但是提交按钮载入图标还是会有
             * 不能替代隐藏 refreshIcon.parentElement.removeChild(refreshIcon);
             * 除非设置 触发 submitDone 事件，见下例
             * 而且出现提交成功图标后，需用额外css隐藏提交表单成功的提示
             * 见 src/formio/formio-js/css/examples/btn1.css
             */
            // Prevent the submission from going to the form.io server.
            instance.nosubmit = true;

            instance.on('submit', (submission) => {
                console.log('on submit submission:', submission);
                const res = FormioUtils.flattenComponents(instance.components);
                console.log('on submit flattenComponents:', res);
                const firstName = FormioUtils.getValue(submission, 'firstName');
                console.log('on submit getValue firstName:', firstName);
                /**
                 * 此处可以向后台发起Ajax请求，发生表单数据submission
                 * 得到后台返回结果response code 成功后，调用
                 * form.emit('submitDone', submission)
                 * 见 https://formio.github.io/formio.js/app/examples/customendpoint.html
                 * 触发submitDone Event，并传递后台返回的或本地保存的submission json数据
                 * submission.data 可以添加其他数据
                 */
                submission.data.mockAjaxRes = '000000';
                instance.emit('submitDone', submission);

            });

            instance.on('submitDone', (submission) => {
                console.log('submitDone submission:', submission);
            });

            instance.on('error', (errors) => {
                console.log(errors);
            });

        });
    }

    render() {
        return (
            <div className="container">
                <h2>t1 - Submit & Reset - button - JSON Powered Forms - examples - formio.js</h2>
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