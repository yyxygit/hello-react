import React from 'react';
/**
 * https://github.com/formio/formio.js/wiki
 * import Formio from 'formiojs';
 * 报错： Formio is not a constructor
 * 使用  import {Formio} from 'formiojs'; 页面正常运行
 */
import {Formio} from 'formiojs';

/**
 * https://github.com/formio/formio.js/wiki/JavaScript-API
 * The JavaScript API is a minimalistic API library that allows you to work with the Form.io API's within JavaScript.
 * Formio类用来与formio网站API交互
 *
 */

function javascriptAPI() {
    /**
     * 返回Project Context项目上下文对象，包含在线项目的所有信息
     * @type {Formio}
     */
    /**
     * 返回 Form Context 对象
     * Form context is provided to the Formio class by passing along the endpoint of the form you wish to reference.

     var formio = new Formio('https://myproject.form.io/myform');
     * @type {Formio}
     */
    let formApi = new Formio('https://examples.form.io/example');

    /**
     * Loads the given Form.
     * form: json obj 表单信息
     */
    formApi.loadForm().then(function(form) {
        console.log('form:', form);
    });

    const baseUrl = Formio.getBaseUrl();
    /**
     * baseUrl: https://api.form.io
     * https://github.com/formio/formio.js/wiki/JavaScript-API
     * Static Methods
     Formio.setBaseUrl(<url>)
     Sets the base URL to tell this library which root API you are talking with.

     Formio.setBaseUrl('https://forms.myserver.com');
     Formio.getBaseUrl()
     Gets the base url configuration.
     */
    console.log('baseUrl:', baseUrl);

    const token = Formio.getToken();
    // debugger;
    // token 空字符串
    console.log('token:', token);

    Formio.currentUser().then(function(user) {
        // user: null
        console.log('user:', user);
    });

    /**
     * Formio.accessInfo()
     Fetches the accessInfo from the current baseURL project.
     不太清楚具体信息
     */
    Formio.accessInfo().then(function(access) {
        console.log('access:', access);
    });

    /**
     * Formio.clearCache()
     Clears out the static http request cache.
     This will ensure that the next API request actually hits the network and gets new data.
     */
    Formio.clearCache();
    /**
     * Loads all of the projects that your account has access to.
     * https://api.form.io/project
     * 401 Unauthorized
     *
     * try 设置 package.json
     * "proxy": "https://api.form.io/",
     * 同样 https://api.form.io/project 401 (Unauthorized)

    Formio.loadProjects().then(function(projects) {
        console.log('projects:', projects);
    });*/

    return (
        <h2>test 1 - loadForm - Javascript API - wiki - formio.js</h2>
    );
}

export default javascriptAPI;