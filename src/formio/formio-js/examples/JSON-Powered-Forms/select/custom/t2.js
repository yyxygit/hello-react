import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import address from './address';


/**
 * 市区村及联选择
 */

class JsonPoweredForms extends React.Component {

    componentDidMount() {
        Formio.createForm(
            document.getElementById('formio'),
            {
                components: [
                    {
                        type: 'select',
                        key: 'districtList',
                        label: 'District List',
                        placeholder: 'select district',
                        template: "{{item.label}}",
                        validate: {
                            required: true
                        },
                        dataSrc: "values",
                        data: {
                            /**
                             * 返回省选项数组，值的数组
                             */
                            values: Object.keys(address.districtList)
                        }
                    },
                    {
                        type: 'select',
                        key: 'cityList',
                        label: 'City List',
                        placeholder: 'select city',
                        template: "{{item.label}}",
                        validate: {
                            required: true
                        },
                        /**
                         * 如果data获得的值的集合是简单数组，
                         * [v1, v2,...]
                         * 不需要指定这个属性，自然会以数组值做列表选项存储的选取值，
                         * 显示由 template: "{{item.label}}" 属性设定
                         * 如果data自定义，获得的值的集合是对象数组，
                         * [
                         *  {label: 'l1', value: 'v1'},
                         *  {label: 'l2', value: 'v2'},
                         *  ...
                         * ]
                         * 指定 valueProperty 属性名，来选取对象集合中的属性值，
                         * 作为选项列表被选中时，存储的值内容
                         */
                        valueProperty: 'label',
                        refreshOn: 'districtList',
                        clearOnRefresh: true,
                        dataSrc: "custom",
                        data: {
                            custom: (event) => {
                                /**
                                 * custom 事件回调
                                 * 每当districtList变化时，动态更新cityList的下拉选项
                                 * event 包含表单各项数据
                                 * event.data 表单字段数据
                                 */
                                let values = [];
                                Object.keys(address.districtList).forEach(item => {
                                    if(item === event.data.districtList) {
                                        values = address.districtList[item];
                                    }
                                });
                                /**
                                 * 如果不指定valueProperty属性，则cityList存储的值是{
                                 *     label: '', value: ''
                                 * }
                                 * 对象数组中的对象值，不是具体city值
                                 */
                                return values;
                            }
                        }
                    },
                    {
                        type: 'select',
                        key: 'quList',
                        label: 'Qu List',
                        placeholder: 'select qu',
                        template: "{{item.label}}",
                        validate: {
                            required: true
                        },
                        valueProperty: 'value',
                        refreshOn: 'cityList',
                        clearOnRefresh: true,
                        dataSrc: "custom",
                        data: {
                            custom: (event) => {
                                /**
                                 * 打开 debugger 观察到，
                                 * 在上一级cityList被选中时，会触发下级data custom 更新事件
                                 * 在本身select被选择下拉显示前，仍会触发这个custom事件
                                 */
                                let values = [];
                                Object.keys(address.cityList).forEach(item => {
                                    // debugger;
                                    if(item === event.data.cityList) {
                                        values = address.cityList[item];
                                    }
                                });
                                return values;
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
                // console.log('change event:', event);

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
                <h2>t2 - custom dataSrc - select - JSON Powered Forms - examples - formio.js</h2>

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