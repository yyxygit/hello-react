import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import '../../../css/style.css';

class FlattenCompoents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Formio.icons = 'fontawesome';
        const form = Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: 'textfield',
                        key: 'firstName',
                        label: 'First Name',
                        placeholder: 'Enter your first name.',
                        input: true,
                        tooltip: 'Enter your <strong>First Name</strong>',
                        description: 'Enter your <strong>First Name</strong>'
                    },
                    {
                        type: 'textfield',
                        key: 'lastName',
                        label: 'Last Name',
                        placeholder: 'Enter your last name',
                        input: true,
                        tooltip: 'Enter your <strong>Last Name</strong>',
                        description: 'Enter your <strong>Last Name</strong>'
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
                        /**
                         * <span>Raindrops on roses</span>
                         * 估计可以自定义classname类名样式
                         */
                        template: "<span>{{ item.label }}</span>",
                        multiple: true,
                        input: true
                    },
                    {
                        type: 'button',
                        action: 'submit',
                        label: 'Submit',
                        theme: 'primary'
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
                hooks: {
                    /**
                     * submit button 点击后出现 <i> 旋转刷新图标
                     * fa fa-refresh fa-spin button-icon-right
                     * fa-refresh 图标
                     * fa-spin 动画旋转
                     * button-icon-right 靠右对齐
                     * 点击提交后，删除该图标
                     */
                    beforeSubmit: (submission, next) => {
                        /**
                         * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector
                         * 文档对象模型Document引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 html元素Element。 如果找不到匹配项，则返回null。
                         */
                        // const refreshIcon = document.querySelector('i.fa-refresh');
                        /**
                         * https://www.liaoxuefeng.com/wiki/1022910821149312/1026162402784992
                         * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentElement
                         * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
                         */
                        // refreshIcon.parentElement.removeChild(refreshIcon);

                        console.log('beforeSubmit submission:', submission);
                        submission.data.submit = false;
                        const data = submission.data.favoriteThings;
                        console.log('beforeSubmit data:', data);

                        // Only call next when we are ready.
                        next();
                    }
                }
            }
        );

        form.then((form) => {
            /**
             * 组织提交到form.io服务器
             * https://formio.github.io/formio.js/app/examples/customendpoint.html
             * 经测试，可以替代隐藏 refreshIcon.parentElement.removeChild(refreshIcon);
             */
            // Prevent the submission from going to the form.io server.
            form.nosubmit = true;

            form.on('submit', (submission) => {
                console.log('on submit submission:', submission);
                const res = FormioUtils.flattenComponents(form.components);
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
                form.emit('submitDone', submission);

            });

            form.on('submitDone', (submission) => {
                 console.log('submitDone submission:', submission);
            });

            form.on('error', (errors) => {
                console.log(errors);
            });
        });
    }

    /**
     *
     * form-group has-feedback formio-component formio-component-button formio-component-submit  form-group
     * submit按钮，点击后内部添加<i> 旋转刷新图标
     */

    render() {
        return (
            <div id="t1-getValue" className="container">
                <h2>test 1 - getValue - Utils - wiki - formio.js</h2>
                <div id="formio"></div>
            </div>
        );
    }
}

export default FlattenCompoents;