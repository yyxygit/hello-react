import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const data = [
    {
        type: 'textfield',
        key: 'test1',
        label: 'test 1',
        placeholder: 'test 1',
        input: true,
        tooltip: 'input the name text',
        description: 'this is a text field test',
        prefix: "name:",
    }
];

class TextField extends React.Component {
    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: data
            }
        ).then(function(instance) {

                console.log('instance:', instance);
        });
    }

    render() {
        return (
            <div className="container">
                <h2>t2 text-field - simple embedding - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>

            </div>
        );
    }
}

export default TextField;