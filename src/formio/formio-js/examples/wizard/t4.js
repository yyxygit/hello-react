import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * 使用从t2.js获得的wizard json data 生成离线表单
 * 和t1.js 对比wizard console 后，
 * wizard 数据内，在线url版本，有formio 和 _src 属性数据
 * json t3版本没有，其他都一样，在线formio _src 只是一些API url数据
 */


const wizardData = {
    "_id": "578f930ef1912f8000459a50",
    "machineName": "examples:wizard",
    "modified": "2019-09-05T15:00:24.245Z",
    "title": "Wizard",
    "display": "wizard",
    "type": "form",
    "name": "wizard",
    "path": "wizard",
    "project": "5692b91fd1028f01000407e3",
    "created": "2016-07-20T15:04:46.906Z",
    "components": [
        {
            "hideLabel": false,
            "clearOnHide": false,
            "conditional": {
                "eq": "",
                "when": null,
                "show": ""
            },
            "theme": "default",
            "key": "page1",
            "input": false,
            "components": [
                {
                    "hideLabel": false,
                    "type": "textfield",
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "validate": {
                        "customPrivate": false,
                        "custom": "",
                        "pattern": "",
                        "maxLength": "",
                        "minLength": "",
                        "required": false
                    },
                    "persistent": true,
                    "unique": false,
                    "protected": false,
                    "defaultValue": "",
                    "multiple": true,
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "textfieldonpage1",
                    "label": "Textfield on page 1",
                    "inputMask": "",
                    "inputType": "text",
                    "tableView": true,
                    "input": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "autofocus": false,
                    "spellcheck": true
                },
                {
                    "hideLabel": false,
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "type": "number",
                    "validate": {
                        "custom": "",
                        "multiple": "",
                        "integer": "",
                        "step": "any",
                        "max": "",
                        "min": "",
                        "required": true
                    },
                    "persistent": true,
                    "protected": false,
                    "defaultValue": 0,
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "numberField",
                    "label": "Number Field",
                    "inputType": "number",
                    "tableView": true,
                    "input": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "autofocus": false,
                    "labelPosition": "top",
                    "tags": [],
                    "properties": {}
                }
            ],
            "title": "First",
            "type": "panel",
            "tableView": false
        },
        {
            "hideLabel": false,
            "tableView": false,
            "clearOnHide": false,
            "theme": "default",
            "key": "page2",
            "input": false,
            "components": [
                {
                    "hideLabel": false,
                    "clearOnHide": true,
                    "hidden": false,
                    "type": "textfield",
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "validate": {
                        "customPrivate": false,
                        "custom": "",
                        "pattern": "",
                        "maxLength": "",
                        "minLength": "",
                        "required": true
                    },
                    "persistent": true,
                    "unique": false,
                    "protected": false,
                    "defaultValue": "",
                    "multiple": false,
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "textfieldonPage2",
                    "label": "Textfield on Page 2",
                    "inputMask": "",
                    "inputType": "text",
                    "tableView": true,
                    "input": true,
                    "autofocus": false,
                    "spellcheck": true,
                    "labelPosition": "top",
                    "inputFormat": "plain",
                    "tags": [],
                    "properties": {}
                },
                {
                    "input": true,
                    "tableView": true,
                    "label": "Customer",
                    "key": "page2Customer",
                    "placeholder": "Select a customer",
                    "data": {
                        "values": [
                            {
                                "value": "",
                                "label": ""
                            }
                        ],
                        "json": "",
                        "url": "https://examples.form.io/customer/submission",
                        "resource": "",
                        "custom": "",
                        "headers": [
                            {
                                "value": "",
                                "key": ""
                            }
                        ]
                    },
                    "dataSrc": "url",
                    "valueProperty": "data.email",
                    "defaultValue": "",
                    "refreshOn": "",
                    "filter": "",
                    "authenticate": false,
                    "template": "&lt;span&gt;{{ item.data.firstName }} {{ item.data.lastName }}&lt;/span&gt;",
                    "multiple": false,
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "validate": {
                        "required": false
                    },
                    "type": "select",
                    "lazyLoad": true,
                    "widget": "html5",
                    "hideLabel": false,
                    "labelPosition": "top",
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {},
                    "searchField": "data.email",
                    "autofocus": false
                },
                {
                    "hideLabel": false,
                    "clearOnHide": false,
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "type": "fieldset",
                    "components": [
                        {
                            "hideLabel": false,
                            "clearOnHide": true,
                            "hidden": false,
                            "type": "textfield",
                            "conditional": {
                                "eq": "",
                                "when": null,
                                "show": ""
                            },
                            "validate": {
                                "customPrivate": false,
                                "custom": "",
                                "pattern": "",
                                "maxLength": "",
                                "minLength": "",
                                "required": false
                            },
                            "persistent": true,
                            "unique": false,
                            "protected": false,
                            "defaultValue": "",
                            "multiple": false,
                            "suffix": "",
                            "prefix": "",
                            "placeholder": "",
                            "key": "textfield",
                            "label": "Textfield",
                            "inputMask": "",
                            "inputType": "text",
                            "tableView": true,
                            "input": true,
                            "autofocus": false,
                            "spellcheck": true
                        }
                    ],
                    "legend": "FieldSet Label",
                    "tableView": true,
                    "input": false
                }
            ],
            "title": "Page 2",
            "type": "panel"
        },
        {
            "properties": {
                "": ""
            },
            "conditional": {
                "eq": "",
                "when": null,
                "show": ""
            },
            "tags": [],
            "hideLabel": false,
            "breadcrumb": "default",
            "type": "panel",
            "components": [
                {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "Text",
                    "key": "panelText",
                    "placeholder": "",
                    "prefix": "",
                    "suffix": "",
                    "multiple": false,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "spellcheck": true,
                    "validate": {
                        "required": true,
                        "minLength": "",
                        "maxLength": "",
                        "pattern": "",
                        "custom": "",
                        "customPrivate": false
                    },
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "type": "textfield",
                    "labelPosition": "top",
                    "inputFormat": "plain",
                    "tags": [],
                    "properties": {}
                },
                {
                    "properties": {
                        "": ""
                    },
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "tags": [],
                    "hideLabel": false,
                    "type": "datagrid",
                    "clearOnHide": true,
                    "hidden": false,
                    "persistent": true,
                    "protected": false,
                    "key": "panelDataGrid",
                    "label": "Data Grid",
                    "tableView": true,
                    "components": [
                        {
                            "properties": {
                                "": ""
                            },
                            "tags": [],
                            "labelPosition": "top",
                            "hideLabel": true,
                            "type": "textfield",
                            "conditional": {
                                "eq": "",
                                "when": null,
                                "show": ""
                            },
                            "validate": {
                                "customPrivate": false,
                                "custom": "",
                                "pattern": "",
                                "maxLength": "",
                                "minLength": "",
                                "required": false
                            },
                            "clearOnHide": true,
                            "hidden": false,
                            "persistent": true,
                            "unique": false,
                            "protected": false,
                            "defaultValue": "",
                            "multiple": false,
                            "suffix": "",
                            "prefix": "",
                            "placeholder": "",
                            "key": "panelDataGridA",
                            "label": "A",
                            "inputMask": "",
                            "inputType": "text",
                            "tableView": true,
                            "input": true,
                            "autofocus": false,
                            "spellcheck": true,
                            "inDataGrid": true
                        },
                        {
                            "properties": {
                                "": ""
                            },
                            "tags": [],
                            "labelPosition": "top",
                            "hideLabel": true,
                            "type": "textfield",
                            "conditional": {
                                "eq": "",
                                "when": null,
                                "show": ""
                            },
                            "validate": {
                                "customPrivate": false,
                                "custom": "",
                                "pattern": "",
                                "maxLength": "",
                                "minLength": "",
                                "required": false
                            },
                            "clearOnHide": true,
                            "hidden": false,
                            "persistent": true,
                            "unique": false,
                            "protected": false,
                            "defaultValue": "",
                            "multiple": false,
                            "suffix": "",
                            "prefix": "",
                            "placeholder": "",
                            "key": "panelDataGridB",
                            "label": "B",
                            "inputMask": "",
                            "inputType": "text",
                            "tableView": true,
                            "input": true,
                            "autofocus": false,
                            "spellcheck": true,
                            "inDataGrid": true
                        },
                        {
                            "properties": {
                                "": ""
                            },
                            "tags": [],
                            "labelPosition": "top",
                            "hideLabel": true,
                            "type": "textfield",
                            "conditional": {
                                "eq": "",
                                "when": null,
                                "show": ""
                            },
                            "validate": {
                                "customPrivate": false,
                                "custom": "",
                                "pattern": "",
                                "maxLength": "",
                                "minLength": "",
                                "required": false
                            },
                            "clearOnHide": true,
                            "hidden": false,
                            "persistent": true,
                            "unique": false,
                            "protected": false,
                            "defaultValue": "",
                            "multiple": false,
                            "suffix": "",
                            "prefix": "",
                            "placeholder": "",
                            "key": "panelDataGridC",
                            "label": "C",
                            "inputMask": "",
                            "inputType": "text",
                            "tableView": true,
                            "input": true,
                            "autofocus": false,
                            "spellcheck": true,
                            "inDataGrid": true
                        },
                        {
                            "properties": {
                                "": ""
                            },
                            "tags": [],
                            "labelPosition": "top",
                            "hideLabel": true,
                            "type": "textfield",
                            "conditional": {
                                "eq": "",
                                "when": null,
                                "show": ""
                            },
                            "validate": {
                                "customPrivate": false,
                                "custom": "",
                                "pattern": "",
                                "maxLength": "",
                                "minLength": "",
                                "required": false
                            },
                            "clearOnHide": true,
                            "hidden": false,
                            "persistent": true,
                            "unique": false,
                            "protected": false,
                            "defaultValue": "",
                            "multiple": false,
                            "suffix": "",
                            "prefix": "",
                            "placeholder": "",
                            "key": "panelDataGridD",
                            "label": "D",
                            "inputMask": "",
                            "inputType": "text",
                            "tableView": true,
                            "input": true,
                            "autofocus": false,
                            "spellcheck": true,
                            "inDataGrid": true
                        }
                    ],
                    "tree": true,
                    "input": true,
                    "autofocus": false
                },
                {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "label": "HTML5 Select",
                    "key": "panelHtml5Select",
                    "placeholder": "",
                    "data": {
                        "values": [
                            {
                                "value": "orange",
                                "label": "Orange"
                            },
                            {
                                "value": "apple",
                                "label": "Apple"
                            },
                            {
                                "value": "banana",
                                "label": "Banana"
                            },
                            {
                                "value": "strawberry",
                                "label": "Strawberry"
                            },
                            {
                                "value": "kiwi",
                                "label": "Kiwi"
                            }
                        ],
                        "json": "",
                        "url": "",
                        "resource": "",
                        "custom": ""
                    },
                    "widget": "html5",
                    "dataSrc": "values",
                    "valueProperty": "",
                    "defaultValue": "",
                    "refreshOn": "",
                    "filter": "",
                    "authenticate": false,
                    "template": "&lt;span&gt;{{ item.label }}&lt;/span&gt;",
                    "multiple": false,
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "validate": {
                        "required": false
                    },
                    "type": "select",
                    "labelPosition": "top",
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {}
                }
            ],
            "tableView": false,
            "theme": "default",
            "title": "Page 3",
            "input": false,
            "key": "panel",
            "clearOnHide": false
        },
        {
            "hideLabel": false,
            "clearOnHide": false,
            "conditional": {
                "eq": "",
                "when": null,
                "show": ""
            },
            "theme": "default",
            "key": "page3",
            "input": false,
            "components": [
                {
                    "hideLabel": false,
                    "type": "textfield",
                    "conditional": {
                        "eq": "",
                        "when": null,
                        "show": ""
                    },
                    "validate": {
                        "customPrivate": false,
                        "custom": "",
                        "pattern": "",
                        "maxLength": "",
                        "minLength": "",
                        "required": false
                    },
                    "persistent": true,
                    "unique": false,
                    "protected": false,
                    "defaultValue": "",
                    "multiple": false,
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "textfieldonPage3",
                    "label": "Textfield on Page 3",
                    "inputMask": "",
                    "inputType": "text",
                    "tableView": true,
                    "input": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "autofocus": false,
                    "spellcheck": true
                },
                {
                    "autofocus": false,
                    "input": true,
                    "inputType": "checkbox",
                    "tableView": true,
                    "label": "I agree to the follow the rules",
                    "dataGridLabel": false,
                    "key": "page3Iagreetothefollowtherules",
                    "defaultValue": false,
                    "protected": false,
                    "persistent": true,
                    "hidden": false,
                    "name": "",
                    "value": "",
                    "clearOnHide": true,
                    "validate": {
                        "required": false
                    },
                    "type": "checkbox",
                    "labelPosition": "right",
                    "hideLabel": false,
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {}
                },
                {
                    "input": true,
                    "tableView": true,
                    "label": "Signature",
                    "key": "signature",
                    "placeholder": "",
                    "footer": "Sign above",
                    "width": "100%",
                    "height": "150px",
                    "penColor": "black",
                    "backgroundColor": "rgb(245,245,235)",
                    "minWidth": "0.5",
                    "maxWidth": "2.5",
                    "protected": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "validate": {
                        "required": false
                    },
                    "type": "signature",
                    "hideLabel": true,
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {
                        "": ""
                    },
                    "lockKey": true
                }
            ],
            "title": "Last",
            "type": "panel",
            "tableView": false
        },
        {
            "hideLabel": false,
            "type": "button",
            "theme": "primary",
            "disableOnInvalid": true,
            "action": "submit",
            "block": false,
            "rightIcon": "",
            "leftIcon": "",
            "size": "md",
            "key": "submit",
            "tableView": false,
            "label": "Submit",
            "input": true
        }
    ],
    "owner": "55673dc04f0405dd28205bb7",
    "submissionAccess": [
        {
            "roles": [],
            "type": "create_own"
        },
        {
            "roles": [],
            "type": "create_all"
        },
        {
            "roles": [],
            "type": "read_own"
        },
        {
            "roles": [
                "5692b920d1028f01000407e6"
            ],
            "type": "read_all"
        },
        {
            "roles": [],
            "type": "update_own"
        },
        {
            "roles": [],
            "type": "update_all"
        },
        {
            "roles": [],
            "type": "delete_own"
        },
        {
            "roles": [],
            "type": "delete_all"
        },
        {
            "roles": [],
            "type": "team_read"
        },
        {
            "roles": [],
            "type": "team_write"
        },
        {
            "roles": [],
            "type": "team_admin"
        }
    ],
    "access": [
        {
            "roles": [],
            "type": "create_own"
        },
        {
            "roles": [],
            "type": "create_all"
        },
        {
            "roles": [],
            "type": "read_own"
        },
        {
            "roles": [
                "5692b920d1028f01000407e4",
                "5692b920d1028f01000407e5",
                "5692b920d1028f01000407e6"
            ],
            "type": "read_all"
        },
        {
            "roles": [],
            "type": "update_own"
        },
        {
            "roles": [],
            "type": "update_all"
        },
        {
            "roles": [],
            "type": "delete_own"
        },
        {
            "roles": [],
            "type": "delete_all"
        },
        {
            "roles": [],
            "type": "team_read"
        },
        {
            "roles": [],
            "type": "team_write"
        },
        {
            "roles": [],
            "type": "team_admin"
        }
    ],
    "tags": [],
    "settings": {
        "controller": "['$scope', function($scope) { $scope.$watch('submission.data', function(data) { console.log(data); }, true); }]"
    },
    "revisions": "",
    "_vid": 0
};

class Wizard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /**
         * http://formio.github.io/formio.js/app/examples/wizard.html
         * node_modules/formiojs/Wizard.js
         * @param {Object} options Options object, supported options are:
         *    - breadcrumbSettings.clickable: true (default) determines if the breadcrumb bar is clickable or not
         *    - buttonSettings.show*(Previous, Next, Cancel): true (ddetermines if the button is shown or not
         */
        const form = Formio.createForm(
            document.getElementById('wizard'),
            wizardData,
            {
                breadcrumbSettings: {clickable:false},
                buttonSettings: {showCancel: false}
            })
            .then(function(wizard) {

                console.log('then form:', form);
                console.log('then wizard:', wizard);

                const wizardJson =
                    document.getElementById('wizardJson');
                wizardJson.innerHTML = '';
                wizardJson.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                            wizard.wizard,
                            null,
                            4
                        )
                    )
                );

                // wizard.on('change', function () {
                //
                // });

                wizard.on('nextPage', function(page) {
                    console.log('nextPage:', page);
                });
                wizard.on('submit', function(submission) {
                    console.log('submission:', submission);
                });
            });
    }

    render() {
        return (
            <div className="container">
                <h2>t4 - set button click and show - render wizard json - build wizard form from URL - Wizard - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="wizard"></div>
                </div>
                <h3>wizard json</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="wizardJson"></pre>
                </div>
            </div>
        );
    }
}

export default Wizard;