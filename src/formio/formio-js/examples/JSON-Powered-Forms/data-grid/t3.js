import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/datagrid2.html
 * 用json数据渲染构建表单
 * Data Grid Panels
 In addition to data grid input, you can also place panels inside the data grid to provide dynamic “add another” sections.
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        label: 'Children',
                        key: 'children',
                        type: 'datagrid',
                        input: true,
                        components: [
                            {
                                type: 'panel',
                                label: 'User Information',
                                key: 'userinfo',
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
                                        label: "Gender",
                                        key: "gender",
                                        type: "radio",
                                        inputType: "radio",
                                        input: true,
                                        values: [
                                            {
                                                label: "Male",
                                                value: "male"
                                            },
                                            {
                                                label: "Female",
                                                value: "female"
                                            }
                                        ]
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
                                        conditional: {
                                            eq: "true",
                                            when: "dependant",
                                            show: "true"
                                        }
                                    }

                                ]
                            }
                        ]
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
            <div className="">
                <h2>t3 - panel - data grid - JSON Powered Forms - examples - formio.js</h2>
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