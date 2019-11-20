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
            }
        );

        form.then((form) => {
            const res = FormioUtils.flattenComponents(form.components);
            console.log('flattenComponents:', res);

            form.on('submit', (submission) => {
                console.log('submission:', submission);
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