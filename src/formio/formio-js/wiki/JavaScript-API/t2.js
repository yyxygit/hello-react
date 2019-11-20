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
     * The project context is the top-most level of the Form.io API's.
     * This context provides project level information for anything within your project.
     * To declare the Formio object at this context,
     * you simply need to provide the URL for your project like so.

     var formio = new Formio('https://myproject.form.io');
     * @type {Formio}
     * 运行页面报错：
     * Uncaught (in promise) Missing projectId
     * 使用自有project Live Endpoint: https://bllbeojvobnabqx.form.io
     * 同样报错
     * 使用自有project具体form表单url
     * let projectApi = new Formio('https://bllbeojvobnabqx.form.io/test1');
     * 没有报错
     * 貌似，每次修改path后，重新编译，可以获得正确返回，但刷新页面后，会得到 Missing projectId
     */
    // let projectApi = new Formio('https://examples.form.io/example');
    /**
     * https://portal.form.io/#/project/5d674016b3426e4f1caee306/overview
     * hello formio project on form.io website
     * @type {Formio}
     */
    let projectApi = new Formio('https://bllbeojvobnabqx.form.io/');
    /**
     * Missing projectId 刷新请求不到数据问题，clearCache无用
     * 只有react页面重新编译，才能得到正常promise返回
     */
    Formio.clearCache();
    projectApi.loadProject().then(function(project) {
        console.log('project:', project);
    });

    return (
        <h2>test 2 - loadProject - Javascript API - wiki - formio.js</h2>
    );
}

export default javascriptAPI;