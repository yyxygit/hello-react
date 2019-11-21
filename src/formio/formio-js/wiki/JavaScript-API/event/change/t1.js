import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class ChangeEvent extends React.Component {
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
            }
        );

        form.then((form) =>{
            /**
             * 组织提交到form.io服务器
             * https://formio.github.io/formio.js/app/examples/customendpoint.html
             * 经测试，可以替代隐藏 refreshIcon.parentElement.removeChild(refreshIcon);
             */
            // Prevent the submission from going to the form.io server.
            form.nosubmit = true;

            form.on('change', function (event) {
                console.log('change event:', event);
                console.log('change event.data:', event.data);
                console.log('change event.changed.component.key:', event.changed.component.key);
                console.log('change event.changed.value:', event.changed.value);
            });


            form.on('error', (errors) => {
                console.log(errors);
            });

        });
    }

    render() {
        return (
            <div id="t1-getValue" className="container">
                <h2>test 1 - change event - JavaScript API - wiki - formio.js</h2>
                <div id="formio"></div>
            </div>
        );
    }
}

export default ChangeEvent;