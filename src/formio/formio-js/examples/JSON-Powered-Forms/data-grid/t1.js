import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 http://formio.github.io/formio.js/app/examples/datagrid.html
 * 用json数据渲染构建表单
 *
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
                        label: 'Children',
                        key: 'children',
                        type: 'datagrid',
                        input: true,
                        validate: {
                            minLength: 3,
                            maxLength: 6
                        },
                        components: [
                            {
                                label: 'First Name',
                                key: 'firstName',
                                type: 'textfield',
                                input: true
                            },
                            {
                                label: 'Last Name',
                                key: 'lastName',
                                type: 'textfield',
                                input: true
                            },
                            {
                                label: 'Gender',
                                key: 'gender',
                                type: 'select',
                                input: true,
                                data: {
                                    values: [
                                        {
                                            value: 'male',
                                            label: 'Male'
                                        },
                                        {
                                            value: 'female',
                                            label: 'Female'
                                        },
                                        {
                                            value: 'other',
                                            label: 'Other'
                                        }
                                    ]
                                },
                                dataSrc: 'values',
                                template: '<span>{{ item.label }}</span>'
                            },
                            {
                                type: 'checkbox',
                                label: 'Dependant',
                                key: 'dependant',
                                inputType: 'checkbox',
                                input: true
                            },
                            {
                                label: 'Birthdate',
                                key: 'birthdate',
                                type: 'datetime',
                                input: true,
                                format: 'yyyy-MM-dd hh:mm a',
                                enableDate: true,
                                enableTime: true,
                                defaultDate: '',
                                datepickerMode: 'day',
                                datePicker: {
                                    showWeeks: true,
                                    startingDay: 0,
                                    initDate: '',
                                    minMode: 'day',
                                    maxMode: 'year',
                                    yearRows: 4,
                                    yearColumns: 5,
                                    datepickerMode: 'day'
                                },
                                timePicker: {
                                    hourStep: 1,
                                    minuteStep: 1,
                                    showMeridian: true,
                                    readonlyInput: false,
                                    mousewheel: true,
                                    arrowkeys: true
                                },
                                "conditional": {
                                    "eq": "true",
                                    "when": "dependant",
                                    "show": "true"
                                }
                            }
                        ]
                    }
                ]
            }
        ).then(function(instance) {
            console.log('then instance:', instance);

            // Provide a default submission.
            instance.submission = {
                data: {
                    children: [
                        {
                            firstName: 'Joe',
                            lastName: 'Smith',
                            gender: 'male',
                            dependant: true,
                            birthdate: '1982-05-18'
                        },
                        {
                            firstName: 'Mary',
                            lastName: 'Smith',
                            gender: 'female',
                            dependant: false,
                            birthdate: '1979-02-17'
                        }
                    ]
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
            <div className="">
                <h2>t1 - JSON Powered Forms - examples - formio.js</h2>
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