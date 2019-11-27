import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

/**
 * t3.js import 获得的永远是 test data
 * 说明导入导出在页面初始化时就完成了，之后原变量值如果是不可变数据，它是不会动态更新的
 * @type {string}
 */
var componentsData = 'test data';

class Builder extends React.Component {

    componentDidMount() {
        const builderObj = Formio.builder(
            document.getElementById('builder'),
            {},
            {}
        );
        builderObj.then(function (builder) {
            const formObj = Formio.createForm(
                document.getElementById('formio'),
                {}
            );
            formObj.then(function (formInstance) {
                const jsonNode =
                    document.getElementById('json');
                formInstance.on('change', function () {
                    console.log('formInstance:', formInstance);
                    componentsData = formInstance.components;
                    let cache = [];
                    jsonNode.innerHTML = '';
                    jsonNode.appendChild(
                        document.createTextNode(
                            JSON.stringify(
                                formInstance.components,
                                function(key, value) {
                                    if (typeof value === 'object' && value !== null) {
                                        if (cache.indexOf(value) !== -1) {
                                            // Circular reference found, discard key
                                            return;
                                        }
                                        // Store value in our collection
                                        cache.push(value);
                                    }
                                    return value;
                                },
                                4
                            )
                        )
                    );
                    // 释放内存？
                    cache = null;
                });
                builder.on('change', function (schema) {
                    if (schema.components) {
                        formInstance.form = schema;
                        console.log('schema:', schema);
                    }
                });
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Builder4 - Simple Embedding - examples - formio.js</h2>
                <div className="card card-body bg-light">
                    <div id="builder"></div>
                </div>
                <h4>Rendered Form</h4>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h4>Form Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json"></pre>
                </div>
            </div>
        );
    }
}

export default Builder;
export {componentsData};