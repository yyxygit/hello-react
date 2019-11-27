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
        const form = Formio.createForm(
            document.getElementById('wizard'),
            'https://examples.form.io/wizard')
            .then(function(wizard) {
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
                <h2>t1 - build wizard form from URL - Wizard - examples - formio.js</h2>
                <div id="wizard"></div>
            </div>
        );
    }
}

export default Wizard;