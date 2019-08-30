import React from 'react';
import { Formio } from 'formiojs';

export default class extends React.Component {

    componentDidMount() {
        Formio.createForm(document.getElementById('formio'), 'https://examples.form.io');
    }

    render() {
        return (
            <div>
                <div id="formio"></div>
                <div>
                    <button onClick={this.showForm}>form</button>
                </div>
            </div>
        );
    }
}
