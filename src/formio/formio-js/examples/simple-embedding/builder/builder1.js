import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Builder extends React.Component {

    componentDidMount() {
        const builderObj = Formio.builder(
            document.getElementById('builder'),
            {},
            {}
        );
        builderObj.then(function (builder) {
            const formObj = Formio.createForm(
                document.getElementById('formio'),
                {}
            );
            formObj.then(function (formInstance) {
                const jsonNode =
                    document.getElementById('json');
                formInstance.on('change', function () {
                    console.log('formInstance:', formInstance);
                    jsonNode.innerHTML = '';
                    /**
                     * error
                     * TypeError: Converting circular structure to JSON
                     --> starting at object with constructor 'Object'
                     |     property 'backendConnector' -> object with constructor 'Connector'
                     --- property 'services' closes the circle
                     */
                    jsonNode.appendChild(
                        document.createTextNode(
                            JSON.stringify(
                                formInstance.components
                            )
                        )
                    );
                });
                builder.on('change', function (schema) {
                    if (schema.components) {
                        formInstance.form = schema;
                        console.log('schema:', schema);
                    }
                });
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Builder1 - Simple Embedding - examples - formio.js</h2>
                <div className="card card-body bg-light">
                    <div id="builder"></div>
                </div>
                <h4>Rendered Form</h4>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h4>Form Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json"></pre>
                </div>
            </div>
        );
    }
}

export default Builder;