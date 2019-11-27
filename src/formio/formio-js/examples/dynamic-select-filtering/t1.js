import React from 'react';
import {Formio} from 'formiojs';
// import FormioUtils from 'formiojs/utils';

import 'formiojs/dist/formio.full.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class BuilderRenderSubmission extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Formio.createForm(document.getElementById('formio'),
            {
                "title":"Year-Make-Model",
                "version":"2.0.0",
                "display":"form",
                "description":"Provides a simple User authentication system.",
                "name":"jsbazvfvwpakeug",
                "roles":{
                    "administrator":{
                        "title":"Administrator",
                        "description":"A role for Administrative Users.",
                        "admin":true,
                        "default":false
                    },
                    "authenticated":{
                        "title":"Authenticated",
                        "description":"A role for Authenticated Users.",
                        "admin":false,
                        "default":false
                    },
                    "anonymous":{
                        "title":"Anonymous",
                        "description":"A role for Anonymous Users.",
                        "admin":false,
                        "default":true
                    }
                },
                "forms":{
                    "userLogin":{
                        "title":"User Login",
                        "type":"form",
                        "name":"userLogin",
                        "path":"user/login",
                        "tags":[

                        ],
                        "components":[
                            {
                                "type":"email",
                                "persistent":true,
                                "unique":false,
                                "protected":false,
                                "defaultValue":"",
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your email address",
                                "key":"email",
                                "lockKey":true,
                                "label":"Email",
                                "inputType":"email",
                                "tableView":true,
                                "input":true
                            },
                            {
                                "type":"password",
                                "persistent":true,
                                "protected":true,
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your password.",
                                "key":"password",
                                "lockKey":true,
                                "label":"Password",
                                "inputType":"password",
                                "tableView":false,
                                "input":true
                            },
                            {
                                "type":"button",
                                "theme":"primary",
                                "disableOnInvalid":true,
                                "action":"submit",
                                "block":false,
                                "rightIcon":"",
                                "leftIcon":"",
                                "size":"md",
                                "key":"submit",
                                "tableView":false,
                                "label":"Submit",
                                "input":true
                            }
                        ],
                        "access":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"read_all"
                            }
                        ],
                        "submissionAccess":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"create_own"
                            }
                        ]
                    },
                    "userRegister":{
                        "title":"User Register",
                        "type":"form",
                        "name":"userRegister",
                        "path":"user/register",
                        "tags":[

                        ],
                        "components":[
                            {
                                "type":"email",
                                "persistent":true,
                                "unique":false,
                                "protected":false,
                                "defaultValue":"",
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your email address",
                                "key":"email",
                                "lockKey":true,
                                "label":"Email",
                                "inputType":"email",
                                "tableView":true,
                                "input":true
                            },
                            {
                                "type":"password",
                                "persistent":true,
                                "protected":true,
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your password.",
                                "key":"password",
                                "lockKey":true,
                                "label":"Password",
                                "inputType":"password",
                                "tableView":false,
                                "input":true
                            },
                            {
                                "theme":"primary",
                                "disableOnInvalid":true,
                                "action":"submit",
                                "block":false,
                                "rightIcon":"",
                                "leftIcon":"",
                                "size":"md",
                                "key":"submit",
                                "label":"Submit",
                                "input":true,
                                "type":"button"
                            }
                        ],
                        "access":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"read_all"
                            }
                        ],
                        "submissionAccess":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"create_own"
                            }
                        ]
                    },
                    "adminLogin":{
                        "title":"Admin Login",
                        "type":"form",
                        "name":"adminLogin",
                        "path":"admin/login",
                        "tags":[

                        ],
                        "components":[
                            {
                                "type":"email",
                                "persistent":true,
                                "unique":false,
                                "protected":false,
                                "defaultValue":"",
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your email address",
                                "key":"email",
                                "lockKey":true,
                                "label":"Email",
                                "inputType":"email",
                                "tableView":true,
                                "input":true
                            },
                            {
                                "type":"password",
                                "persistent":true,
                                "protected":true,
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your password.",
                                "key":"password",
                                "lockKey":true,
                                "label":"Password",
                                "inputType":"password",
                                "tableView":false,
                                "input":true
                            },
                            {
                                "type":"button",
                                "theme":"primary",
                                "disableOnInvalid":true,
                                "action":"submit",
                                "block":false,
                                "rightIcon":"",
                                "leftIcon":"",
                                "size":"md",
                                "key":"submit",
                                "tableView":false,
                                "label":"Submit",
                                "input":true
                            }
                        ],
                        "access":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"read_all"
                            }
                        ],
                        "submissionAccess":[
                            {
                                "roles":[
                                    "anonymous"
                                ],
                                "type":"create_own"
                            }
                        ]
                    },
                    "vehicleRegistration":{
                        "title":"Vehicle Registration",
                        "type":"form",
                        "name":"vehicleRegistration",
                        "path":"vehicleregistration",
                        "display":"form",
                        "tags":[

                        ],
                        "settings":{

                        },
                        "components":[
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "label":"Make",
                                "key":"make",
                                "placeholder":"",
                                "data":{
                                    "values":[
                                        {
                                            "value":"",
                                            "label":""
                                        }
                                    ],
                                    "json":"",
                                    "url":"",
                                    "resource":"make",
                                    "custom":"",
                                    "project":"project"
                                },
                                "dataSrc":"resource",
                                "valueProperty":"data.makeResource",
                                "defaultValue":"",
                                "refreshOn":"",
                                "filter":"",
                                "authenticate":false,
                                "template":"<span>{{ item.data.makeResource }}</span>",
                                "multiple":false,
                                "protected":false,
                                "unique":false,
                                "persistent":true,
                                "hidden":false,
                                "clearOnHide":true,
                                "validate":{
                                    "required":true
                                },
                                "type":"select",
                                "labelPosition":"top",
                                "tags":[

                                ],
                                "conditional":{
                                    "show":"",
                                    "when":null,
                                    "eq":""
                                },
                                "properties":{

                                },
                                "searchField":"data.makeResource__regex"
                            },
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "label":"Model",
                                "key":"model",
                                "placeholder":"",
                                "data":{
                                    "values":[
                                        {
                                            "value":"",
                                            "label":""
                                        }
                                    ],
                                    "json":"",
                                    "url":"",
                                    "resource":"modelResource",
                                    "custom":"",
                                    "project":"project"
                                },
                                "dataSrc":"resource",
                                "valueProperty":"data.modelResource",
                                "defaultValue":"",
                                "refreshOn":"make",
                                "filter":"data.makeReference={{data.make}}",
                                "authenticate":false,
                                "template":"<span>{{ item.data.modelResource }}</span>",
                                "multiple":false,
                                "protected":false,
                                "unique":false,
                                "persistent":true,
                                "hidden":false,
                                "clearOnHide":true,
                                "validate":{
                                    "required":true
                                },
                                "type":"select",
                                "labelPosition":"top",
                                "tags":[

                                ],
                                "conditional":{
                                    "show":"",
                                    "when":null,
                                    "eq":""
                                },
                                "properties":{

                                },
                                "searchField":"data.modelResource__regex",
                                "limit":"",
                                "clearOnRefresh":true
                            },
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "inputType":"text",
                                "inputMask":"",
                                "label":"Year",
                                "key":"year",
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
                                    "required":true,
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
                                "tags":[

                                ],
                                "properties":{

                                }
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
                                    "administrator",
                                    "authenticated",
                                    "anonymous"
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
                                    "anonymous"
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
                                    "anonymous"
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
                        ]
                    }
                },
                "actions":{
                    "admin:role":{
                        "title":"Role Assignment",
                        "name":"role",
                        "form":"admin",
                        "settings":{
                            "association":"new",
                            "type":"add",
                            "role":"administrator"
                        },
                        "priority":1,
                        "method":[
                            "create"
                        ],
                        "handler":[
                            "after"
                        ]
                    },
                    "admin:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"admin",
                        "priority":10,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "adminLogin:login":{
                        "title":"Login",
                        "name":"login",
                        "form":"adminLogin",
                        "settings":{
                            "resources":[
                                "admin"
                            ],
                            "username":"email",
                            "password":"password",
                            "allowedAttempts":5,
                            "attemptWindow":30,
                            "lockWait":1800
                        },
                        "priority":2,
                        "method":[
                            "create"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "userLogin:login":{
                        "title":"Login",
                        "name":"login",
                        "form":"userLogin",
                        "settings":{
                            "resources":[
                                "user"
                            ],
                            "username":"email",
                            "password":"password",
                            "allowedAttempts":5,
                            "attemptWindow":30,
                            "lockWait":1800
                        },
                        "priority":2,
                        "method":[
                            "create"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "userRegister:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"userRegister",
                        "settings":{
                            "resource":"user",
                            "fields":{
                                "email":"email",
                                "password":"password"
                            }
                        },
                        "priority":11,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "userRegister:login":{
                        "title":"Login",
                        "name":"login",
                        "form":"userRegister",
                        "settings":{
                            "resources":[
                                "user"
                            ],
                            "username":"email",
                            "password":"password"
                        },
                        "priority":2,
                        "method":[
                            "create"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "user:role":{
                        "title":"Role Assignment",
                        "name":"role",
                        "form":"user",
                        "settings":{
                            "association":"new",
                            "type":"add",
                            "role":"authenticated"
                        },
                        "priority":1,
                        "method":[
                            "create"
                        ],
                        "handler":[
                            "after"
                        ]
                    },
                    "user:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"user",
                        "priority":10,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "make:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"make",
                        "priority":10,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "modelResource:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"modelResource",
                        "priority":10,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    },
                    "vehicleRegistration:save":{
                        "title":"Save Submission",
                        "name":"save",
                        "form":"vehicleRegistration",
                        "priority":10,
                        "method":[
                            "create",
                            "update"
                        ],
                        "handler":[
                            "before"
                        ]
                    }
                },
                "resources":{
                    "user":{
                        "title":"User",
                        "type":"resource",
                        "name":"user",
                        "path":"user",
                        "tags":[

                        ],
                        "components":[
                            {
                                "type":"email",
                                "persistent":true,
                                "unique":false,
                                "protected":false,
                                "defaultValue":"",
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your email address",
                                "key":"email",
                                "label":"Email",
                                "inputType":"email",
                                "tableView":true,
                                "input":true
                            },
                            {
                                "type":"password",
                                "persistent":true,
                                "protected":true,
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your password.",
                                "key":"password",
                                "label":"Password",
                                "inputType":"password",
                                "tableView":false,
                                "input":true
                            },
                            {
                                "type":"button",
                                "theme":"primary",
                                "disableOnInvalid":true,
                                "action":"submit",
                                "block":false,
                                "rightIcon":"",
                                "leftIcon":"",
                                "size":"md",
                                "key":"submit",
                                "tableView":false,
                                "label":"Submit",
                                "input":true
                            }
                        ],
                        "access":[
                            {
                                "roles":[
                                    "anonymous",
                                    "authenticated",
                                    "administrator"
                                ],
                                "type":"read_all"
                            }
                        ],
                        "submissionAccess":[
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"create_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"read_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"update_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"delete_all"
                            },
                            {
                                "roles":[

                                ],
                                "type":"create_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"read_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"update_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"delete_own"
                            }
                        ]
                    },
                    "admin":{
                        "title":"Admin",
                        "type":"resource",
                        "name":"admin",
                        "path":"admin",
                        "tags":[

                        ],
                        "components":[
                            {
                                "type":"email",
                                "persistent":true,
                                "unique":false,
                                "protected":false,
                                "defaultValue":"",
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your email address",
                                "key":"email",
                                "label":"Email",
                                "inputType":"email",
                                "tableView":true,
                                "input":true
                            },
                            {
                                "type":"password",
                                "persistent":true,
                                "protected":true,
                                "suffix":"",
                                "prefix":"",
                                "placeholder":"Enter your password.",
                                "key":"password",
                                "label":"Password",
                                "inputType":"password",
                                "tableView":false,
                                "input":true
                            },
                            {
                                "type":"button",
                                "theme":"primary",
                                "disableOnInvalid":true,
                                "action":"submit",
                                "block":false,
                                "rightIcon":"",
                                "leftIcon":"",
                                "size":"md",
                                "key":"submit",
                                "tableView":false,
                                "label":"Submit",
                                "input":true
                            }
                        ],
                        "access":[
                            {
                                "roles":[
                                    "anonymous",
                                    "authenticated",
                                    "administrator"
                                ],
                                "type":"read_all"
                            }
                        ],
                        "submissionAccess":[
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"create_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"read_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"update_all"
                            },
                            {
                                "roles":[
                                    "administrator"
                                ],
                                "type":"delete_all"
                            },
                            {
                                "roles":[

                                ],
                                "type":"create_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"read_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"update_own"
                            },
                            {
                                "roles":[

                                ],
                                "type":"delete_own"
                            }
                        ]
                    },
                    "make":{
                        "title":"Make Resource",
                        "type":"resource",
                        "name":"makeResource",
                        "path":"makeresource",
                        "display":"form",
                        "tags":[

                        ],
                        "settings":{

                        },
                        "components":[
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "inputType":"text",
                                "inputMask":"",
                                "label":"Make Resource",
                                "key":"makeResource",
                                "placeholder":"Enter the make of the vehicle",
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
                                    "required":true,
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
                                "tags":[

                                ],
                                "properties":{

                                },
                                "lockKey":true
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
                                    "administrator",
                                    "authenticated",
                                    "anonymous"
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
                                    "anonymous"
                                ],
                                "type":"read_all"
                            },
                            {
                                "roles":[
                                    "anonymous"
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
                        ]
                    },
                    "modelResource":{
                        "title":"Model Resource",
                        "type":"resource",
                        "name":"modelResource",
                        "path":"modelresource",
                        "display":"form",
                        "tags":[

                        ],
                        "settings":{

                        },
                        "components":[
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "label":"Make Reference",
                                "key":"makeReference",
                                "placeholder":"Select model resource",
                                "data":{
                                    "values":[
                                        {
                                            "value":"",
                                            "label":""
                                        }
                                    ],
                                    "json":"",
                                    "url":"",
                                    "resource":"make",
                                    "custom":"",
                                    "project":"project"
                                },
                                "dataSrc":"resource",
                                "valueProperty":"data.makeResource",
                                "defaultValue":"",
                                "refreshOn":"",
                                "filter":"",
                                "authenticate":false,
                                "template":"<span>{{ item.data.makeResource }}</span>",
                                "multiple":false,
                                "protected":false,
                                "unique":false,
                                "persistent":true,
                                "hidden":false,
                                "clearOnHide":true,
                                "validate":{
                                    "required":true
                                },
                                "type":"select",
                                "labelPosition":"top",
                                "tags":[

                                ],
                                "conditional":{
                                    "show":"",
                                    "when":null,
                                    "eq":""
                                },
                                "properties":{

                                },
                                "lockKey":true,
                                "searchField":"data.makeResource__regex"
                            },
                            {
                                "autofocus":false,
                                "input":true,
                                "tableView":true,
                                "inputType":"text",
                                "inputMask":"",
                                "label":"Model Resource",
                                "key":"modelResource",
                                "placeholder":"Enter the model of the vehicle",
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
                                    "required":true,
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
                                "tags":[

                                ],
                                "properties":{

                                }
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
                                    "administrator",
                                    "authenticated",
                                    "anonymous"
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
                                    "anonymous"
                                ],
                                "type":"read_own"
                            },
                            {
                                "roles":[
                                    "anonymous"
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
                        ]
                    }
                },
                "access":[
                    {
                        "type":"create_all",
                        "roles":[
                            "administrator"
                        ]
                    },
                    {
                        "type":"read_all",
                        "roles":[
                            "administrator",
                            "authenticated",
                            "anonymous"
                        ]
                    },
                    {
                        "type":"update_all",
                        "roles":[
                            "administrator"
                        ]
                    },
                    {
                        "type":"delete_all",
                        "roles":[
                            "administrator"
                        ]
                    }
                ]
            }).then(function(instance) {
            let jsonSubmissionData = document.getElementById('json-submissionData');
            let jsonComponent = document.getElementById('json-component');
            instance.on('change', function() {
                jsonComponent.innerHTML = '';
                jsonComponent.appendChild(document.createTextNode(JSON.stringify(instance.component, null, 4)));
                console.log('instance:', instance);
                jsonSubmissionData.innerHTML = '';
                jsonSubmissionData.appendChild(document.createTextNode(JSON.stringify(instance.submission, null, 4)));
            });

        });


    }

    render() {
        return (
            <div className="container">
                <h2>test 1 - simple Builder-Render-Submission - examples - formio.js</h2>
                <div className="card card-body bg-light">
                    <div id="builder"></div>
                </div>
                <h4>Rendered Form</h4>
                <div className="card card-body bg-light">
                    <div id="formio"></div>
                </div>
                <h4>Submission Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-submissionData"></pre>
                </div>
                <h4>Component Data</h4>
                <div className="card card-body bg-light jsonviewer">
                    <pre id="json-component"></pre>
                </div>
            </div>
        );
    }

}

export default BuilderRenderSubmission;