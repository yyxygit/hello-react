import React from 'react';
import {Formio} from 'formiojs';
/**
 * https://github.com/formio/formio.js/wiki
 * https://github.com/formio/formio.js/wiki/Form-Renderer
 * 文档示例
 *
 * Form Renderer
 * This library includes a robust, plain JavaScript,
 * form rendering engine that is capable of dynamically generating Webforms using a JSON schema.
 *
 * 用json数据生成表单 例子参见 src/formio/formio-js/hello/t3.html
 *
 * Formio.createForm
 * This method is a factory method that will create an instance of a FormioForm class based on the display type of the form.
 * For example, if you set your form to render as a wizard, then this factory will load the form,
 * read the display property of the form,
 * and then create an instance of either FormioForm, FormioWizard, or FormioPDF based on the display of the form.
 *
 * Using the Form Renderer
 The form renderer is utilized by creating an instance of the FormioForm class.
 This class can be created using the Formio.createForm method as follows.

 Formio.createForm([element], [src|form], [options]).then((form) => {

});
 * Property	Description	Example
 element	The HTML DOM element you would like to render the form within.	document.getElementById('formio')
 src	form	Either the URL of the form, or the form JSON object
 options	The options to alter behavior of the rendering.	See below
 */

class formRender extends React.Component {

    constructor(props) {
        super(props);
    }

    showForm = (e) => {
        e.preventDefault();

        Formio.createForm(
            document.getElementById('formelement'),
            'https://examples.form.io/example',
            {
                /**
                 * 设置表单只读，不可输入编辑
                 */
                // readOnly: true
            }
        ).then(function (form) {
            form.on('submit', (submission) => {
                console.log('The form was just submitted!!!');
            });
            form.on('error', (errors) => {
                console.log('We have errors!');
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div id="formelement"></div>
                <div>
                    <button onClick={this.showForm}>Click Me</button>
                </div>
            </div>
        );
    }

}

export default formRender;

