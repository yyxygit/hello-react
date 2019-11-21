import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../css/style.css';

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
                        const refreshIcon = document.querySelector('i.fa-refresh');
                        /**
                         * https://www.liaoxuefeng.com/wiki/1022910821149312/1026162402784992
                         * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentElement
                         * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
                         */
                        refreshIcon.parentElement.removeChild(refreshIcon);

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



            form.on('submit', (submission) => {
                console.log('on submit submission:', submission);
                const res = FormioUtils.flattenComponents(form.components);
                console.log('on submit flattenComponents:', res);
                const firstName = FormioUtils.getValue(submission, 'firstName');
                console.log('on submit getValue firstName:', firstName);
            });
            form.on('error', (errors) => {
                console.log(errors);
            })
        });
    }

    /**
     *
     * form-group has-feedback formio-component formio-component-button formio-component-submit  form-group
     * @returns {*}
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