import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * http://formio.github.io/formio.js/app/examples/external.html
 * 用json数据渲染构建表单
 * select 动态加载外部数据
 * 实现省市区及联选项类的，联动选择
 * 这个例子是根据前一个select选择厂家品牌，更新后一个型号列表
 *
 * External Sources & Conditional Selects
 The Select component allows you to connect to external data sources as well as perform look ahead searching within that data source.

 Conditional Selects
 In addition, you can also make each of the selects conditional based on the values provided from previous select lists.
 For example, you could set up a Make + Model select dropdown selection, where the Model is dependent on the Make selection.
 This can be done with the following JSON configurations.
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: 'editgrid',
                        label: 'Cars',
                        key: 'cars',
                        defaultOpen: true,
                        removeRow: 'Cancel',
                        components: [
                            {
                                type: 'select',
                                label: 'Make',
                                key: 'make',
                                placeholder: 'Select your make',
                                dataSrc: 'values',
                                validate: {
                                    required: true
                                },
                                data: {
                                    values: [
                                        {
                                            label: 'Chevy',
                                            value: 'chevrolet'
                                        },
                                        {
                                            value: 'honda',
                                            label: 'Honda'
                                        },
                                        {
                                            label: 'Ford',
                                            value: 'ford'
                                        },
                                        {
                                            label: 'Toyota',
                                            value: 'toyota'
                                        }
                                    ]
                                }
                            },
                            {
                                type: 'select',
                                label: 'Model',
                                key: 'model',
                                placeholder: 'Select your model',
                                dataSrc: 'url',
                                /**
                                 * 根据make的选项，动态请求数据
                                 * json 结构参见 t3.js 注释
                                 */
                                data: {
                                    url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/{{ row.make }}?format=json'
                                },
                                valueProperty: 'Model_Name',
                                template: '<span>{{ item.Model_Name }}</span>',
                                refreshOn: 'make',
                                clearOnRefresh: true,
                                selectValues: 'Results',
                                validate: {
                                    required: true
                                }
                            }
                        ]
                    }
                ]
            }
        ).then(function(instance) {
            console.log('then instance:', instance);

            const formJson =
                document.getElementById('formData');
            formJson.innerHTML = '';
            formJson.appendChild(
                document.createTextNode(
                    JSON.stringify(
                        instance['_form'],
                        null,
                        4
                    )
                )
            );

            instance.on('change', function (event) {
                console.log('change event:', event);

                const submitData =
                    document.getElementById('submissionData');
                submitData.innerHTML = '';
                submitData.appendChild(
                    document.createTextNode(
                        JSON.stringify(
                            instance['_submission'],
                            null,
                            4
                        )
                    )
                );
            });

        });
    }

    render() {
        return (
            <div className="">
                <h2>t5 - dynamic combined ajax - select - JSON Powered Forms - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h3>instance['_form']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="formData"></pre>
                </div>
                <h3>instance['_submission']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="submissionData"></pre>
                </div>
            </div>
        );
    }

}

export default JsonPoweredForms;