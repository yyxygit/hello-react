/**
 * http://formio.github.io/formio.js/app/examples/customwizard.html
 * access https://examples.form.io/customwizard get wizard json data
 * 获得json 用 https://jsonformatter.curiousconcept.com/ 美化后得到的结果如下
 * 这就是example的配置项
 * 用按钮button的event事件动作，来触发翻页和提交
 * "type":"button",
 * "event":"gotoNextPage",
 * "action":"event",
 * "customConditional":"show = !!submission._id;"
 */

var data = {
    "_id":"5d38b51f2b8ff8efc876b807",
    "type":"form",
    "tags":[

    ],
    "owner":"553dbfc08d22d5cb1a7024f2",
    "components":[
        {
            "type":"panel",
            "title":"Page 1",
            "components":[
                {
                    "autofocus":false,
                    "input":true,
                    "tableView":true,
                    "inputType":"text",
                    "inputMask":"",
                    "label":"A",
                    "key":"a",
                    "placeholder":"",
                    "prefix":"",
                    "suffix":"",
                    "multiple":false,
                    "defaultValue":"",
                    "protected":false,
                    "unique":false,
                    "persistent":true,
                    "hidden":false,
                    "clearOnHide":true,
                    "spellcheck":true,
                    "validate":{
                        "required":false,
                        "minLength":"",
                        "maxLength":"",
                        "pattern":"",
                        "custom":"",
                        "customPrivate":false
                    },
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "type":"textfield",
                    "labelPosition":"top",
                    "inputFormat":"plain",
                    "tags":[

                    ],
                    "properties":{

                    },
                    "lockKey":true
                },
                {
                    "autofocus":false,
                    "input":true,
                    "tableView":true,
                    "inputType":"text",
                    "inputMask":"",
                    "label":"B",
                    "key":"b",
                    "placeholder":"",
                    "prefix":"",
                    "suffix":"",
                    "multiple":false,
                    "defaultValue":"",
                    "protected":false,
                    "unique":false,
                    "persistent":true,
                    "hidden":false,
                    "clearOnHide":true,
                    "spellcheck":true,
                    "validate":{
                        "required":false,
                        "minLength":"",
                        "maxLength":"",
                        "pattern":"",
                        "custom":"",
                        "customPrivate":false
                    },
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "type":"textfield",
                    "labelPosition":"top",
                    "inputFormat":"plain",
                    "tags":[

                    ],
                    "properties":{

                    },
                    "lockKey":true
                },
                {
                    "clearOnHide":false,
                    "label":"Columns",
                    "input":false,
                    "tableView":false,
                    "key":"page1Columns",
                    "columns":[
                        {
                            "components":[

                            ],
                            "width":6,
                            "offset":0,
                            "push":0,
                            "pull":0
                        },
                        {
                            "components":[
                                {
                                    "autofocus":false,
                                    "input":true,
                                    "label":"Go to next page",
                                    "tableView":false,
                                    "key":"page1Gotonextpage",
                                    "size":"md",
                                    "leftIcon":"",
                                    "rightIcon":"fa fa-chevron-right",
                                    "block":true,
                                    "action":"event",
                                    "disableOnInvalid":false,
                                    "theme":"primary",
                                    "type":"button",
                                    "tags":[

                                    ],
                                    "conditional":{
                                        "show":"",
                                        "when":null,
                                        "eq":""
                                    },
                                    "properties":{

                                    },
                                    "event":"gotoNextPage",
                                    "custom":""
                                }
                            ],
                            "width":6,
                            "offset":0,
                            "push":0,
                            "pull":0
                        }
                    ],
                    "type":"columns",
                    "hideLabel":true,
                    "tags":[

                    ],
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "properties":{

                    }
                }
            ],
            "input":false,
            "key":"page1",
            "clearOnHide":false,
            "theme":"default",
            "tableView":false,
            "hideLabel":false
        },
        {
            "type":"panel",
            "title":"Page 2",
            "components":[
                {
                    "autofocus":false,
                    "input":true,
                    "tableView":true,
                    "inputType":"text",
                    "inputMask":"",
                    "label":"C",
                    "key":"c",
                    "placeholder":"",
                    "prefix":"",
                    "suffix":"",
                    "multiple":false,
                    "defaultValue":"",
                    "protected":false,
                    "unique":false,
                    "persistent":true,
                    "hidden":false,
                    "clearOnHide":true,
                    "spellcheck":true,
                    "validate":{
                        "required":false,
                        "minLength":"",
                        "maxLength":"",
                        "pattern":"",
                        "custom":"",
                        "customPrivate":false
                    },
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "type":"textfield",
                    "labelPosition":"top",
                    "inputFormat":"plain",
                    "tags":[

                    ],
                    "properties":{

                    },
                    "lockKey":true
                },
                {
                    "autofocus":false,
                    "input":true,
                    "tableView":true,
                    "inputType":"text",
                    "inputMask":"",
                    "label":"D",
                    "key":"d",
                    "placeholder":"",
                    "prefix":"",
                    "suffix":"",
                    "multiple":false,
                    "defaultValue":"",
                    "protected":false,
                    "unique":false,
                    "persistent":true,
                    "hidden":false,
                    "clearOnHide":true,
                    "spellcheck":true,
                    "validate":{
                        "required":false,
                        "minLength":"",
                        "maxLength":"",
                        "pattern":"",
                        "custom":"",
                        "customPrivate":false
                    },
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "type":"textfield",
                    "labelPosition":"top",
                    "inputFormat":"plain",
                    "tags":[

                    ],
                    "properties":{

                    },
                    "lockKey":true
                },
                {
                    "clearOnHide":false,
                    "label":"Columns",
                    "input":false,
                    "tableView":false,
                    "key":"page2Columns",
                    "columns":[
                        {
                            "components":[
                                {
                                    "autofocus":false,
                                    "input":true,
                                    "label":"Previous Page",
                                    "tableView":false,
                                    "key":"page2PreviousPage",
                                    "size":"md",
                                    "leftIcon":"fa fa-chevron-left",
                                    "rightIcon":"",
                                    "block":true,
                                    "action":"event",
                                    "disableOnInvalid":false,
                                    "theme":"primary",
                                    "type":"button",
                                    "tags":[

                                    ],
                                    "conditional":{
                                        "show":"",
                                        "when":null,
                                        "eq":""
                                    },
                                    "properties":{

                                    },
                                    "event":"gotoPreviousPage"
                                }
                            ],
                            "width":6,
                            "offset":0,
                            "push":0,
                            "pull":0
                        },
                        {
                            "components":[
                                {
                                    "autofocus":false,
                                    "input":true,
                                    "label":"Save and Process",
                                    "tableView":false,
                                    "key":"page2ColumnsSaveandProcess",
                                    "size":"md",
                                    "leftIcon":"fa fa-save",
                                    "rightIcon":"",
                                    "block":true,
                                    "action":"event",
                                    "disableOnInvalid":false,
                                    "theme":"success",
                                    "type":"button",
                                    "tags":[

                                    ],
                                    "conditional":{
                                        "show":"",
                                        "when":null,
                                        "eq":""
                                    },
                                    "properties":{

                                    },
                                    "event":"wizardSave"
                                }
                            ],
                            "width":6,
                            "offset":0,
                            "push":0,
                            "pull":0
                        }
                    ],
                    "type":"columns",
                    "hideLabel":true,
                    "tags":[

                    ],
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "properties":{

                    }
                }
            ],
            "input":false,
            "key":"page2",
            "clearOnHide":false,
            "theme":"default",
            "tableView":false,
            "hideLabel":false
        },
        {
            "type":"panel",
            "title":"Thank You!",
            "components":[
                {
                    "key":"page3Content",
                    "input":false,
                    "html":"<h1>Thank you for your submission!</h1>\n\n<p>Here are the values you submitted.</p>\n\n<ol>\n\t<li>A:&nbsp; &nbsp;{{ data.a }}</li>\n\t<li>B:&nbsp; &nbsp;{{ data.b }}</li>\n\t<li>C:&nbsp; &nbsp;{{ data.c }}</li>\n\t<li>D:&nbsp; &nbsp;{{ data.d }}</li>\n</ol>\n",
                    "type":"content",
                    "tags":[

                    ],
                    "conditional":{
                        "show":"",
                        "when":null,
                        "eq":""
                    },
                    "properties":{

                    }
                }
            ],
            "input":false,
            "key":"page3",
            "clearOnHide":false,
            "theme":"default",
            "tableView":false,
            "hideLabel":false,
            "breadcrumb":"default",
            "tags":[

            ],
            "conditional":{
                "show":"",
                "when":null,
                "eq":""
            },
            "properties":{

            },
            "customConditional":"show = !!submission._id;"
        },
        {
            "autofocus":false,
            "input":true,
            "label":"Submit",
            "tableView":false,
            "key":"submit",
            "size":"md",
            "leftIcon":"",
            "rightIcon":"",
            "block":false,
            "action":"submit",
            "disableOnInvalid":false,
            "theme":"primary",
            "type":"button"
        }
    ],
    "revisions":"",
    "_vid":0,
    "title":"Custom Wizard",
    "display":"wizard",
    "access":[
        {
            "roles":[

            ],
            "type":"create_own"
        },
        {
            "roles":[

            ],
            "type":"create_all"
        },
        {
            "roles":[

            ],
            "type":"read_own"
        },
        {
            "roles":[
                "5692b920d1028f01000407e4",
                "5692b920d1028f01000407e5",
                "5692b920d1028f01000407e6"
            ],
            "type":"read_all"
        },
        {
            "roles":[

            ],
            "type":"update_own"
        },
        {
            "roles":[

            ],
            "type":"update_all"
        },
        {
            "roles":[

            ],
            "type":"delete_own"
        },
        {
            "roles":[

            ],
            "type":"delete_all"
        },
        {
            "roles":[

            ],
            "type":"team_read"
        },
        {
            "roles":[

            ],
            "type":"team_write"
        },
        {
            "roles":[

            ],
            "type":"team_admin"
        }
    ],
    "submissionAccess":[
        {
            "roles":[
                "5692b920d1028f01000407e6"
            ],
            "type":"create_own"
        },
        {
            "roles":[

            ],
            "type":"create_all"
        },
        {
            "roles":[

            ],
            "type":"read_own"
        },
        {
            "roles":[

            ],
            "type":"read_all"
        },
        {
            "roles":[

            ],
            "type":"update_own"
        },
        {
            "roles":[

            ],
            "type":"update_all"
        },
        {
            "roles":[

            ],
            "type":"delete_own"
        },
        {
            "roles":[

            ],
            "type":"delete_all"
        },
        {
            "roles":[

            ],
            "type":"team_read"
        },
        {
            "roles":[

            ],
            "type":"team_write"
        },
        {
            "roles":[

            ],
            "type":"team_admin"
        }
    ],
    "settings":{

    },
    "properties":{

    },
    "name":"customWizard",
    "path":"customwizard",
    "project":"5692b91fd1028f01000407e3",
    "created":"2019-07-24T19:44:31.314Z",
    "modified":"2019-10-17T16:32:18.982Z",
    "machineName":"examples:customWizard"
};