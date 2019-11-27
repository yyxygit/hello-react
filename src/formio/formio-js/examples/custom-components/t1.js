import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class BuilderRenderSubmission extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Formio.builder(document.getElementById('builder'), {}, {
            builder: {
                // basic: false,
                // advanced: false,
                // data: false,
                // layout: false,
                // customBasic: {
                //     title: 'Basic Components',
                //     default: true,
                //     weight: 0,
                //     components: {
                //         checkmatrix: true
                //     }
                // }
            }
        }).then(function(builder) {
            Formio.createForm(document.getElementById('formio'), {}).then(function(instance) {
                const json = document.getElementById('json');
                instance.on('change', function() {
                    json.innerHTML = '';
                    json.appendChild(document.createTextNode(JSON.stringify(instance.submission, null, 4)));
                });
                builder.on('change', function(schema) {
                    if (schema.components) {
                        instance.form = schema;
                        console.log('flattenComponents:', FormioUtils.flattenComponents(instance.components));
                    }
                });
            });
        });

    }

    render() {
        return (
            <div className="container">
                <h2>test 1 - simple Builder-Render-Submission - examples - formio.js</h2>
                <div className="card card-body bg-light">
                    <div id="builder"></div>
                </div>
                <h4>Rendered Form</h4>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h4>Submission Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json"></pre>
                </div>
            </div>
        );
    }

}

export default BuilderRenderSubmission;