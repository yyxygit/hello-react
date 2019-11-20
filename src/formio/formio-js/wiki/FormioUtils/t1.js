import React from 'react';
import {Formio} from 'formiojs';
// import {FormioUtils} from 'formiojs/utils';
import {eachComponent as FormioUtilsEachComponent} from 'formiojs/utils/formUtils';


// var utils = require('formiojs/utils');

/**
 * FormioUtils.eachComponent(form.components, (component) => {
            console.log(component);
        });
 * Cannot read property 'eachComponent' of undefined
 * eachComponent 不是 FormioUtils的方法
 * 在 node_modules/formiojs 里搜索 eachComponent
 * formiojs/utils/formUtils.js 找到 exports.eachComponent = eachComponent;
 * 引入页面正常
 * import {eachComponent} from 'formiojs/utils/formUtils';
 */

function formUtils() {

    let formio = new Formio('https://examples.form.io/example');
    formio.loadForm().then((form) => {
        /**
         * eachComponent 迭代返回表单项列表
         *
         * eachComponent(components, fn, includeAll, path)
         Calls fn(component) for each component in components, accounting for nested layout components.
         (Does not call for layout components themselves, unless includeAll is true
         不包含布局用的列表项目，只是表单内容相关的数据).
         */
        FormioUtilsEachComponent(form.components, (component) => {
            console.log(component);
        });
    });

    return (
        <h2>test 1 - FormioUtils</h2>
    );
}

export default formUtils;