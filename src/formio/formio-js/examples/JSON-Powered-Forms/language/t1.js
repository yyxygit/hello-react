import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/language.html
 * 用json数据渲染构建表单
 * 国际化表单内容，主要是替换label属性值
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
                        placeholder: 'Enter your first name',
                        input: true
                    },
                    {
                        type: 'textfield',
                        key: 'lastName',
                        label: 'Last Name',
                        placeholder: 'Enter your last name',
                        input: true
                    },
                    {
                        type: 'survey',
                        key: 'questions',
                        label: 'Survey',
                        values: [
                            {
                                label: 'Great',
                                value: 'great'
                            },
                            {
                                label: 'Good',
                                value: 'good'
                            },
                            {
                                label: 'Poor',
                                value: 'poor'
                            }
                        ],
                        questions: [
                            {
                                label: 'How would you rate the Form.io platform?',
                                value: 'howWouldYouRateTheFormIoPlatform'
                            },
                            {
                                label: 'How was Customer Support?',
                                value: 'howWasCustomerSupport'
                            },
                            {
                                label: 'Overall Experience?',
                                value: 'overallExperience'
                            }
                        ]
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
                language: 'sp',
                i18n: {
                    sp: {
                        'First Name': 'Nombre de pila',
                        'Last Name': 'Apellido',
                        'Enter your first name': 'Ponga su primer nombre',
                        'Enter your last name': 'Introduce tu apellido',
                        'How would you rate the Form.io platform?': '¿Cómo calificaría la plataforma Form.io?',
                        'How was Customer Support?': '¿Cómo fue el servicio de atención al cliente?',
                        'Overall Experience?': '¿Experiencia general?',
                        Survey: 'Encuesta',
                        Excellent: 'Excelente',
                        Great: 'Estupendo',
                        Good: 'Bueno',
                        Average: 'Promedio',
                        Poor: 'Pobre',
                        'Submit': 'Enviar'
                    },
                    ch: {
                        'First Name': '名字',
                        'Last Name': '姓',
                        'Enter your first name': '输入你的名字',
                        'Enter your last name': '输入你的姓氏',
                        'How would you rate the Form.io platform?': '你如何评价Form.io平台？',
                        'How was Customer Support?': '客户支持如何？',
                        'Overall Experience?': '总体体验？',
                        Survey: '调查',
                        Excellent: '优秀',
                        Great: '大',
                        Good: '好',
                        Average: '平均',
                        Poor: '错',
                        'Submit': '提交'
                    }
                }
            }
        ).then(function(instance) {
            console.log('then instance:', instance);

            window.setLanguage = function(lang) {
                instance.language = lang;
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
                <h2>t1 - i18n - language - JSON Powered Forms - examples - formio.js</h2>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={() => {window.setLanguage('sp')}}>Español</button>
                    <button type="button" className="btn btn-primary" onClick={() => {window.setLanguage('en')}}>English</button>
                    <button type="button" className="btn btn-primary" onClick={() => {window.setLanguage('ch')}}>中文</button>
                </div>
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