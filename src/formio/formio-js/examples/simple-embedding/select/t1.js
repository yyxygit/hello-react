import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * copy from src/formio/formio-js/examples/simple-embedding/select/t0.js
 * http://formio.github.io/formio.js/app/examples/hosted.html
 * 加载带数据的表单
 */

const data = [
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
];

class TextField extends React.Component {
    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: data
            }
        ).then(function(instance) {
            // Default the submission.
            instance.submission = {
                data: {
                    firstName: 'Joe',
                    lastName: 'Smith'
                }
            };
                console.log('instance:', instance);
        });
    }

    render() {
        return (
            <div className="container">
                <h2>t0 - simple embedding - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>

            </div>
        );
    }
}

export default TextField;