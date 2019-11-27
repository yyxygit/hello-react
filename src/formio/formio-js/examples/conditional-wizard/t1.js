import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * http://formio.github.io/formio.js/app/examples/conditionalwizard.html
 * from http://formio.github.io/formio.js/app/sdk
 * 没有给出wizard 用 json 展示的例子
 * 只有 form 用{components: []} 的例子，见t2.js
 */

class ConditionalWizard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const form = Formio.createForm(
            document.getElementById('formio'),
            'https://examples.form.io/conditionalwizard'
        );
        form.then(function (instance) {

            console.log('then instance:', instance);
            console.log('then form:', form);
            const flattenComponents = FormioUtils.flattenComponents(form.components);
            console.log('then flattenComponents:', flattenComponents);

            const wizardData =
                document.getElementById('json-wizardData');
            const submissionData =
                document.getElementById('json-submissionData');
            const formComponents =
                document.getElementById('json-formComponent');


            instance.on('change', function () {
                wizardData.innerHTML = '';
                wizardData.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                        instance.wizard,
                        null,
                        4
                        )
                    )
                );

                formComponents.innerHTML = '';
                formComponents.appendChild(
                  document.createTextNode(
                      JSON.stringify(
                          instance.component.components,
                          null,
                          4
                      )
                  )
                );

                submissionData.innerHTML = '';
                submissionData.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                            instance.submission,
                            null,
                            4
                        )
                    )
                );

                console.log('change flattenComponents:', flattenComponents);


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
                <h4>instance.wizard Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-wizardData"></pre>
                </div>
                <h4>Submission Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-submissionData"></pre>
                </div>
                <h4>instance.component.components Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-formComponent"></pre>
                </div>
            </div>
        );
    }
}

export default ConditionalWizard;