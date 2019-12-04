import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


/**
 * https://codepen.io/psail4444/pen/oNvmbvz
 * 用json数据渲染构建表单
 * select组件，自定义下拉数据 dataSrc: 'custom'
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        "type": "selectboxes",
                        "key": "countries",
                        "label": "The checked countries are source of the Select Component",
                        "values": [
                            {
                                "label": "USA",
                                "value": "usa"
                            },
                            {
                                "label": "Australia",
                                "value": "australia"
                            },
                            {
                                "label": "Singapore",
                                "value": "singapore"
                            },
                            {
                                "label": "England",
                                "value": "england"
                            }
                        ]
                    },
                    {
                        "type": "select",
                        "key": "selected_country",
                        "label": "The default selected value should change as you check\\uncheck countries above",
                        "customOptions": {
                            "removeItemButton": false,
                            "searchEnabled": false
                        },
                        "refreshOn": "countries",
                        "clearOnRefresh": true,
                        "template": "{{item.label}}",
                        // "customDefaultValue": "value = _.filter(_.map(data.countries,(val,ky) => {return val && {'label': ky, 'value': ky}}),(val) => val)[0]",
                        "dataSrc": "custom",
                        "data": {
                            /**
                             * dataSrc 和 data 属性的 custom 选项，
                             * 可以让select组件，根据表单其他组件的输入值，动态显示不同的列表
                             * 比如，省市区及联选择，见t2
                             */
                            // "custom": "values = _.filter(_.map(data.countries,(val,ky) => {return val && {'label': ky, 'value': ky}}),(val) => val)"
                            custom: (e) => {
                                /**
                                 * e.data 引用form表单数据 data 所有字段值
                                 * 对象 countries = {
                                 *     usa: false,
                                 *     australia: true // 被勾选
                                 *     singapore： false
                                 *     england： true
                                 * }
                                 */
                                const countries = e.data.countries;
                                /**
                                 * 返回一个数组，作为data的value列表
                                 */
                                return Object.keys(countries).map(key => {
                                    if(countries[key]) {
                                        return {'label': key, 'value': key};
                                    }
                                });
                            }
                        }
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
            <div className="container">
                <h2>t1 custom dataSrc - select - JSON Powered Forms - examples - formio.js</h2>
                <h3>Rendered Form</h3>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h3>instance['_submission']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="submissionData"></pre>
                </div>
                <h3>instance['_form']</h3>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="formData"></pre>
                </div>

            </div>
        );
    }

}

export default JsonPoweredForms;