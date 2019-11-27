import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';
import {componentsData} from "../builder/builder3";

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


class TextField extends React.Component {
    componentDidMount() {
        console.log('componentsData:', componentsData);
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: componentsData
            }
        ).then(function(instance) {

                console.log('instance:', instance);
        });
    }

    render() {
        return (
            <div className="container">
                <h2>t3 text-field - simple embedding - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>

            </div>
        );
    }
}

export default TextField;