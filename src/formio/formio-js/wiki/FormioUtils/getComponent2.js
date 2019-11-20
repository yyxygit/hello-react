import React from 'react';
import {Formio} from 'formiojs';
import FormioUtils from 'formiojs/utils';
// var utils = require('formiojs/utils');
// import {getComponent as FuGetComponent} from 'formiojs/utils/formUtils';





function formUtils() {

    let formio = new Formio('https://examples.form.io/example');
    formio.loadForm().then((form) => {
        let component = FormioUtils.getComponent(form.components, 'survey');
        console.log('survey:', component);
    });

    return (
        <h2>test 3 - getComponent - FormioUtils</h2>
    );
}

export default formUtils;