import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../css/style.css';

class FlattenCompoents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Formio.icons = 'fontawesome';
        const form = Formio.createForm(
            document.getElementById('formio'),
            'https://bllbeojvobnabqx.form.io/test1'
        );
        form.then((form) => {
            const res = FormioUtils.flattenComponents(form.components);
            console.log('flattenComponents:', res);
        });
    }

    render() {
        return (
            <div id="t1-flattenComponents">
                <h2>test 1 - flattenComponents - Utils - wiki - formio.js</h2>
                <div id="formio"></div>
            </div>
        );
    }
}

export default FlattenCompoents;