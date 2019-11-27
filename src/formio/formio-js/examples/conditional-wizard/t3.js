import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * see
 * http://formio.github.io/formio.js/app/examples/wizard.html
 * wizard json data comes from t1.js
 * instance.wizard
 * The determination on whether a form is a wizard or not is based on the display property on the form schema like so.
 */
const wizard = {
    "_id": "5949549db4214d007db15bb0",
    "machineName": "examples:conditionalwizard",
    "modified": "2017-06-20T17:00:13.967Z",
    "title": "conditionalwizard",
    "display": "wizard",
    "name": "conditionalwizard",
    "path": "conditionalwizard",
    "project": "5692b91fd1028f01000407e3",
    "created": "2017-06-20T17:00:13.458Z",
    "components": [
{
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "type": "panel",
    "components": [
{
    "input": true,
    "tableView": true,
    "label": "What plan would you like to register for?",
    "key": "whatplanwouldyouliketoregisterfor",
    "values": [
{
    "value": "health",
    "label": "Health"
},
{
    "value": "life",
    "label": "Life"
}
    ],
    "inline": false,
    "protected": false,
    "persistent": true,
    "hidden": false,
    "clearOnHide": true,
    "validate": {
    "required": false
},
    "type": "selectboxes",
    "conditional": {
    "show": "",
    "when": null,
    "eq": ""
}
}
    ],
    "theme": "default",
    "title": "Employee Information",
    "input": false,
    "key": "panel"
},
{
    "conditional": {
    "eq": "health",
    "when": "whatplanwouldyouliketoregisterfor",
    "show": "true"
},
    "tags": [],
    "type": "panel",
    "components": [
{
    "clearOnHide": true,
    "hidden": false,
    "lockKey": true,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "type": "select",
    "validate": {
    "required": false
},
    "persistent": true,
    "unique": false,
    "protected": false,
    "multiple": false,
    "template": "&lt;span&gt;{{ item.label }}&lt;/span&gt;",
    "authenticate": false,
    "filter": "",
    "refreshOn": "",
    "defaultValue": "",
    "valueProperty": "",
    "dataSrc": "values",
    "data": {
    "resource": "",
    "url": "",
    "json": "",
    "values": [
{
    "label": "PPO",
    "value": "ppo"
},
{
    "label": "HSA",
    "value": "hsa"
},
{
    "label": "None",
    "value": "none"
}
    ]
},
    "placeholder": "Choose one",
    "key": "healthplan",
    "label": "Select your health plan",
    "tableView": true,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "input": true,
    "tableView": true,
    "inputType": "number",
    "label": "Contribution Amount",
    "key": "contributionAmount",
    "placeholder": "",
    "prefix": "$",
    "suffix": "per pay period",
    "defaultValue": 0,
    "protected": false,
    "persistent": true,
    "validate": {
    "required": false,
    "min": "",
    "max": "",
    "step": "0.00",
    "integer": "",
    "multiple": "",
    "custom": ""
},
    "type": "number",
    "tags": [],
    "conditional": {
    "show": "true",
    "when": "healthplan",
    "eq": "hsa"
}
},
{
    "clearOnHide": true,
    "hidden": false,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "type": "select",
    "validate": {
    "required": false
},
    "persistent": true,
    "unique": false,
    "protected": false,
    "multiple": false,
    "template": "&lt;span&gt;{{ item.label }}&lt;/span&gt;",
    "authenticate": false,
    "filter": "",
    "refreshOn": "",
    "defaultValue": "",
    "valueProperty": "",
    "dataSrc": "values",
    "data": {
    "resource": "",
    "url": "",
    "json": "",
    "values": [
{
    "label": "Dental Health Center Plan",
    "value": "dentalHealthCenterPlan"
},
{
    "label": "Dental Blue Freedom Plan",
    "value": "dentalBlueFreedomPlan"
},
{
    "label": "None",
    "value": "none"
}
    ]
},
    "placeholder": "Choose one",
    "key": "selectyourDentalPlan",
    "label": "Select your Dental Plan",
    "tableView": true,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "type": "datagrid",
    "persistent": true,
    "protected": false,
    "key": "participants",
    "label": "Participants",
    "tableView": false,
    "components": [
{
    "clearOnHide": true,
    "hidden": false,
    "tags": [],
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
    "persistent": true,
    "unique": false,
    "protected": false,
    "defaultValue": "",
    "multiple": false,
    "suffix": "",
    "prefix": "",
    "placeholder": "",
    "key": "fullName",
    "label": "Full Name",
    "inputMask": "",
    "inputType": "text",
    "tableView": false,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "defaultDate": "",
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "hideLabel": true,
    "type": "datetime",
    "validate": {
    "custom": "",
    "required": false
},
    "persistent": true,
    "protected": false,
    "timePicker": {
    "arrowkeys": true,
    "mousewheel": true,
    "readonlyInput": false,
    "showMeridian": true,
    "minuteStep": 1,
    "hourStep": 1
},
    "datePicker": {
    "datepickerMode": "day",
    "yearRange": "20",
    "maxMode": "year",
    "minMode": "day",
    "initDate": "",
    "startingDay": 0,
    "showWeeks": true
},
    "datepickerMode": "day",
    "enableTime": false,
    "enableDate": true,
    "format": "yyyy-MM-dd",
    "placeholder": "",
    "key": "dateofBirth",
    "label": "Date of Birth",
    "tableView": false,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "hideLabel": true,
    "type": "select",
    "validate": {
    "required": false
},
    "persistent": true,
    "unique": false,
    "protected": false,
    "multiple": false,
    "template": "&lt;span&gt;{{ item.label }}&lt;/span&gt;",
    "authenticate": false,
    "filter": "",
    "refreshOn": "",
    "defaultValue": "",
    "valueProperty": "",
    "dataSrc": "values",
    "data": {
    "resource": "",
    "url": "",
    "json": "",
    "values": [
{
    "label": "Male",
    "value": "male"
},
{
    "label": "Female",
    "value": "female"
}
    ]
},
    "placeholder": "",
    "key": "gender1",
    "label": "Gender",
    "tableView": false,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "tags": [],
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
    "persistent": true,
    "unique": false,
    "protected": false,
    "defaultValue": "",
    "multiple": false,
    "suffix": "",
    "prefix": "",
    "placeholder": "",
    "key": "socialSecurity",
    "label": "Social Security #",
    "inputMask": "999-99-9999",
    "inputType": "text",
    "tableView": false,
    "input": true
}
    ],
    "tree": true,
    "input": true
}
    ],
    "theme": "success",
    "title": "Health Plan",
    "input": false
},
{
    "input": false,
    "title": "Life Insurance",
    "theme": "info",
    "components": [
{
    "clearOnHide": true,
    "hidden": false,
    "input": true,
    "tableView": false,
    "label": "Supplemental Insurance",
    "key": "supplementalPlan",
    "placeholder": "Select an insurance plan",
    "data": {
    "values": [
{
    "value": "1XSalary",
    "label": "1 x Salary"
},
{
    "value": "2XSalary",
    "label": "2 x Salary"
},
{
    "value": "3XSalary",
    "label": "3 x Salary"
},
{
    "value": "4XSalary",
    "label": "4 x Salary"
},
{
    "value": "5XSalary",
    "label": "5 x Salary"
},
{
    "value": "none",
    "label": "None"
}
    ],
    "json": "",
    "url": "",
    "resource": ""
},
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
    "validate": {
    "required": false
},
    "type": "select",
    "tags": [],
    "conditional": {
    "show": "",
    "when": null,
    "eq": ""
},
    "lockKey": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "input": true,
    "tableView": false,
    "inputType": "number",
    "label": "Dependent Life Insurance",
    "key": "dependentLifeInsurance",
    "placeholder": "Enter an amount",
    "prefix": "$",
    "suffix": "USD",
    "defaultValue": 0,
    "protected": false,
    "persistent": true,
    "validate": {
    "required": false,
    "min": "",
    "max": "",
    "step": "1000",
    "integer": "",
    "multiple": "",
    "custom": ""
},
    "type": "number",
    "tags": [],
    "conditional": {
    "show": "",
    "when": null,
    "eq": ""
}
},
{
    "clearOnHide": true,
    "hidden": false,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "type": "datagrid",
    "persistent": true,
    "protected": false,
    "key": "beneficiaries",
    "label": "Beneficiaries",
    "tableView": false,
    "components": [
{
    "clearOnHide": true,
    "hidden": false,
    "tags": [],
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
    "persistent": true,
    "unique": false,
    "protected": false,
    "defaultValue": "",
    "multiple": false,
    "suffix": "",
    "prefix": "",
    "placeholder": "",
    "key": "fullName1",
    "label": "Full Name",
    "inputMask": "",
    "inputType": "text",
    "tableView": false,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "tags": [],
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
    "persistent": true,
    "unique": false,
    "protected": false,
    "defaultValue": "",
    "multiple": false,
    "suffix": "",
    "prefix": "",
    "placeholder": "",
    "key": "relationship",
    "label": "Relationship",
    "inputMask": "",
    "inputType": "text",
    "tableView": false,
    "input": true
},
{
    "clearOnHide": true,
    "hidden": false,
    "conditional": {
    "eq": "",
    "when": null,
    "show": ""
},
    "tags": [],
    "hideLabel": true,
    "type": "number",
    "validate": {
    "custom": "",
    "multiple": "",
    "integer": "",
    "step": "1",
    "max": "",
    "min": "",
    "required": false
},
    "persistent": true,
    "protected": false,
    "defaultValue": 0,
    "suffix": "%",
    "prefix": "",
    "placeholder": "",
    "key": "percentofBenefit",
    "label": "Percent of Benefit",
    "inputType": "number",
    "tableView": false,
    "input": true
}
    ],
    "tree": true,
    "input": true
}
    ],
    "type": "panel",
    "tags": [],
    "conditional": {
    "show": "true",
    "when": "whatplanwouldyouliketoregisterfor",
    "eq": "life"
}
},
{
    "input": false,
    "title": "Signature",
    "theme": "default",
    "components": [
{
    "input": false,
    "html": "&lt;p&gt;I certify below that I have completed this form to the best of my knowledge, and I understand the following:&lt;/p&gt;\n\n&lt;ul&gt;\n\t&lt;li&gt;My coverage elections on this form cannot be revoked or modified during the year unless I have a qualifying change in status as defined by the IRS; I may, however, change my coverage elections during the next open enrollment period.&lt;/li&gt;\n\t&lt;li&gt;My pay will be reduced by the amount of any required contributions noted for the coverages elected where the contributions are pre-tax.&lt;/li&gt;\n\t&lt;li&gt;I acknowledge receiving a copy of the Faculty &amp;amp; Staff Benefits Handbook for my employee classification and reading the descriptions of the benefit plans in which I am enrolling. I also understand any limitations or restrictions on coverage or benefits under these benefit plans as described in the Faculty &amp;amp; Staff Benefits Handbook. If I have enrolled in a Health Care or Dependent Care Flexible Spending Account, I agree to the provisions printed on the reverse side of this form.&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;I give permission to the health plan I select to obtain and/or examine my medical records (and/or those of my dependent(s)) from any health care practitioner or institution in which care is provided while a member, to the extent permitted by law; and I (we) understand the benefits and agree to the provisions as described in the Plan document.&lt;/p&gt;\n",
    "type": "content",
    "tags": [],
    "conditional": {
    "show": "",
    "when": null,
    "eq": ""
}
},
{
    "clearOnHide": true,
    "hidden": false,
    "input": true,
    "tableView": false,
    "label": "Signature",
    "key": "signature1",
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
}
}
    ],
    "type": "panel",
    "tags": [],
    "conditional": {
    "show": "",
    "when": null,
    "eq": ""
}
},
{
    "type": "button",
    "theme": "primary",
    "disableOnInvalid": false,
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
    "owner": "553dbfc08d22d5cb1a7024f2",
    "submissionAccess": [],
    "access": [
{
    "type": "read_all",
    "roles": [
    "5692b920d1028f01000407e4",
    "5692b920d1028f01000407e5",
    "5692b920d1028f01000407e6"
    ]
}
    ],
    "tags": [],
    "type": "form"
};


class ConditionalWizard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let form = Formio.createForm(
            document.getElementById('formio'),
            wizard
        );
        form.then(function (instance) {
            console.log('then instance:', instance);
            const flattenComponents = FormioUtils.flattenComponents(form.components);
            console.log('then flattenComponents:', flattenComponents);

            let jsonInstanceData =
                document.getElementById('json-instanceData');
            let jsonSubmissionData =
                document.getElementById('json-submissionData');
            let jsonComponent =
                document.getElementById('json-component');


            instance.on('change', function () {
                // jsonInstanceData.innerHTML = '';
                // jsonInstanceData.appendChild(
                //     document.createTextNode(
                //         instance,
                //         null,
                //         4
                //     )
                // );

                jsonComponent.innerHTML = '';
                jsonComponent.appendChild(
                  document.createTextNode(
                      JSON.stringify(
                          instance.component.components,
                          null,
                          4
                      )
                  )
                );

                jsonSubmissionData.innerHTML = '';
                jsonSubmissionData.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                            instance.submission,
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
                <h2>test 1 - Conditional Wizard - examples - formio.js</h2>

                <h4>Rendered Form</h4>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h4>instance Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-instanceData"></pre>
                </div>
                <h4>Submission Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-submissionData"></pre>
                </div>
                <h4>Component Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-component"></pre>
                </div>
            </div>
        );
    }
}

export default ConditionalWizard;
