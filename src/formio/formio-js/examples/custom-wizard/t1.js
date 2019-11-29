import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


class Wizard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Formio.createForm(
            document.getElementById('wizard'),
            'https://examples.form.io/customwizard',
            {
                buttonSettings: {
                    showCancel: false,
                    showPrevious: false,
                    showNext: false,
                    showSubmit: false
                }
            }).then(function(wizard) {

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

                wizard.on('gotoNextPage', function() {
                    wizard.nextPage();
                });
                wizard.on('gotoPreviousPage', function() {
                    wizard.prevPage();
                });
                wizard.on('wizardSave', function() {
                    wizard.submit().then(function() {
                        wizard.onChange();
                        wizard.nextPage();
                    });
                });


            });
    }

    render() {
        return (
            <div className="container">
                <h2>t2 get wizard json - build wizard form from URL - Wizard - examples - formio.js</h2>
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