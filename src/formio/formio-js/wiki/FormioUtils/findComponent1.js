import React from 'react';
import {Formio} from 'formiojs';
import utils from 'formiojs/utils';
/**
 * 引入 formio css
 * npm install 通过包管理器安装 bootstrap 和 Font Awesome v4.7.0
 * 引入依赖的样式文件
 */
import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '../../css/style.css';
import {findComponent as FuFindComponent} from 'formiojs/utils/formUtils';

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
        Formio.icons = 'fontawesome';
        /**
         * import { FormioForm } from 'formiojs';
         * import FormioForm from 'formiojs';
         * 都找不到 FormioForm 导出

        let form = new FormioForm(document.getElementById('formelement'));
        form.src = 'https://examples.form.io/example'; */
        const form = Formio.createForm(
            document.getElementById('formelement'),
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
            /**
             * https://github.com/formio/formio.js/wiki/Form-Utilities
             *
             * Find all textfields with a specific custom property.
             *
             * 如何自定义属性property??
            let component = FuFindComponent(form.components, {
                'type': 'textfield',
            });*/

            var comps = utils.findComponents(form.components, {
                'type': 'textfield',
                // 'properties.objectId': '2345'
            });
            debugger;
            console.log('textfield:', comps);
        });

        // debugger;

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

