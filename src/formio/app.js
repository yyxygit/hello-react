import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import EmbedT1 from './react-formio/Embed/t1';
import EmbedT2 from './react-formio/Embed/t2';
import loadForm from './formio-js/wiki/JavaScript-API/t1';
import loadProject from './formio-js/wiki/JavaScript-API/t2';
import HelloRenderer from './formio-js/wiki/Form-Renderer/t1';
import JsonRenderer from './formio-js/wiki/Form-Renderer/t2';
import SettingSubmission from './formio-js/wiki/Form-Renderer/Setting-the-Submission/t1';
import Events from './formio-js/wiki/Form-Renderer/Events/t1';
import utilsHello from './formio-js/wiki/FormioUtils/t1';
// import utilsHello from './formio-js/wiki/FormioUtils/path1';
// import getComponent from './formio-js/wiki/FormioUtils/getComponent1';
import getComponent from './formio-js/wiki/FormioUtils/getComponent2';
import findComponentT1 from './formio-js/wiki/FormioUtils/findComponent1';
import FlattenComponents from './formio-js/wiki/FormioUtils/flattenComponents/t1';
// import GetValue from './formio-js/wiki/FormioUtils/getValue/t1';
// import GetValue from './formio-js/wiki/FormioUtils/getValue/t2';
import GetValue from './formio-js/wiki/JavaScript-API/event/submit/t3';
import ChangeEvent from './formio-js/wiki/JavaScript-API/event/change/t1';
// import BrsHello from './formio-js/examples/custom-components/t1';
import BrsHello from './formio-js/examples/custom-components/t2';
import DSFt1 from './formio-js/examples/dynamic-select-filtering/t1';
import CWt1 from './formio-js/examples/conditional-wizard/t1';
import CWt2 from './formio-js/examples/conditional-wizard/t2';
import CWt3 from './formio-js/examples/conditional-wizard/t3';
// import WizardUrl from './formio-js/examples/wizard/t1';
import WizardUrl from './formio-js/examples/wizard/t2';
import WizardJson from './formio-js/examples/wizard/t3';
// import WizardJson from './formio-js/examples/wizard/t4';
// import SeBuilder from './formio-js/examples/simple-embedding/builder/builder1';
import SeBuilder from './formio-js/examples/simple-embedding/builder/builder2';
// import SeBuilder from './formio-js/examples/simple-embedding/builder/builder3';
// import SeBuilder from './formio-js/examples/simple-embedding/builder/builder4';
// import TfT1 from './formio-js/examples/simple-embedding/text-field/t1';
import TfT1 from './formio-js/examples/simple-embedding/text-field/t2';
// import TfT1 from './formio-js/examples/simple-embedding/text-field/t3';
// import TfT1 from './formio-js/examples/simple-embedding/text-field/t4';
// import SelectT1 from './formio-js/examples/simple-embedding/select/t0';
// import SelectT1 from './formio-js/examples/simple-embedding/select/t1';
import SelectT1 from './formio-js/examples/simple-embedding/select/t2';
import CwT1 from './formio-js/examples/custom-wizard/t1';
import JpfT1 from './formio-js/examples/JSON-Powered-Forms/t1';
import JpfB1 from './formio-js/examples/JSON-Powered-Forms/button/t1';
import JpfE1 from './formio-js/examples/JSON-Powered-Forms/email/t1';
// import JpfS1 from './formio-js/examples/JSON-Powered-Forms/select/t1';
// import JpfS1 from './formio-js/examples/JSON-Powered-Forms/select/t2';
// import JpfS1 from './formio-js/examples/JSON-Powered-Forms/select/t3';
import JpfS1 from './formio-js/examples/JSON-Powered-Forms/select/t4';
import JpfS2 from './formio-js/examples/JSON-Powered-Forms/select/t5';
import JpfCustomS1 from './formio-js/examples/JSON-Powered-Forms/select/custom/t1';
import JpfCustomS2 from './formio-js/examples/JSON-Powered-Forms/select/custom/t2';
// import JpfDg1 from './formio-js/examples/JSON-Powered-Forms/data-grid/t1';
// import JpfDg1 from './formio-js/examples/JSON-Powered-Forms/data-grid/t2';
import JpfDg1 from './formio-js/examples/JSON-Powered-Forms/data-grid/t3';
import JpfN1 from './formio-js/examples/JSON-Powered-Forms/number/t1';
import JpfL1 from './formio-js/examples/JSON-Powered-Forms/language/t1';
import JpfCheckbox1 from './formio-js/examples/JSON-Powered-Forms/checkbox/t1';
import WorkT1 from './formio-js/work/h5/t1';

export default function () {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/react/embed/t1' component={EmbedT1} />
                    <Route path='/react/embed/t2' component={EmbedT2} />
                    <Route path='/basic/wiki/js-api/loadForm' component={loadForm} />
                    <Route path='/basic/wiki/js-api/loadProject' component={loadProject} />
                    <Route path='/basic/wiki/form-renderer/hello' component={HelloRenderer} />
                    <Route path='/basic/wiki/form-renderer/json' component={JsonRenderer} />
                    <Route path='/basic/wiki/form-renderer/setting-submission' component={SettingSubmission} />
                    <Route path='/basic/wiki/form-renderer/events' component={Events} />
                    <Route path='/basic/wiki/form-utils/hello' component={utilsHello} />
                    <Route path='/basic/wiki/form-utils/get-component' component={getComponent} />
                    <Route path='/basic/wiki/form-utils/find-component/hello' component={findComponentT1} />
                    <Route path='/basic/wiki/form-utils/flattenComponents' component={FlattenComponents} />
                    <Route path='/basic/wiki/form-utils/get-value' component={GetValue} />
                    <Route path='/basic/wiki/js-api/event/change' component={ChangeEvent} />
                    <Route path='/basic/examples/builder-render-submission/hello' component={BrsHello} />
                    <Route path='/basic/examples/dynamic-select-filtering/t1' component={DSFt1} />
                    <Route path='/basic/examples/conditional-wizard/t1' component={CWt1} />
                    <Route path='/basic/examples/conditional-wizard/t2' component={CWt2} />
                    <Route path='/basic/examples/conditional-wizard/t3' component={CWt3} />
                    <Route path='/basic/examples/wizard/url' component={WizardUrl} />
                    <Route path='/basic/examples/wizard/json' component={WizardJson} />
                    <Route path='/basic/examples/simple-embedding/builder' component={SeBuilder} />
                    <Route path='/basic/examples/simple-embedding/text-field/t1' component={TfT1} />
                    <Route path='/basic/examples/simple-embedding/select/t1' component={SelectT1} />
                    <Route path='/basic/examples/custom-wizard/t1' component={CwT1} />
                    <Route path='/basic/examples/json-powered-forms/t1' component={JpfT1} />
                    <Route path='/basic/examples/json-powered-forms/button/t1' component={JpfB1} />
                    <Route path='/basic/examples/json-powered-forms/email/t1' component={JpfE1} />
                    <Route path='/basic/examples/json-powered-forms/select/t1' component={JpfS1} />
                    <Route path='/basic/examples/json-powered-forms/data-grid/t1' component={JpfDg1} />
                    <Route path='/basic/examples/json-powered-forms/select/t5' component={JpfS2} />
                    <Route path='/basic/examples/json-powered-forms/number/t1' component={JpfN1} />
                    <Route path='/basic/examples/json-powered-forms/language/t1' component={JpfL1} />
                    <Route path='/basic/examples/json-powered-forms/checkbox/t1' component={JpfCheckbox1} />
                    <Route path='/basic/work/h5/t1' component={WorkT1} />
                    <Route path='/basic/examples/select/custom/t1' component={JpfCustomS1} />
                    <Route path='/basic/examples/select/custom/t2' component={JpfCustomS2} />

                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>form-io</h1>
            <ul className="Menu-list">
                <li>
                    <Link to="/react/embed/t1">/react/embed/t1</Link>
                </li>
                <li>
                    <Link to="/react/embed/t2">/react/embed/t2</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/js-api/loadForm">/basic/wiki/js-api/loadForm</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/js-api/loadProject">/basic/wiki/js-api/loadProject</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-renderer/hello">/basic/wiki/form-renderer/hello</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-renderer/json">/basic/wiki/form-renderer/json</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-renderer/setting-submission">/basic/wiki/form-renderer/setting-submission</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-renderer/events">/basic/wiki/form-renderer/events</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-utils/hello">/basic/wiki/form-utils/hello</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-utils/get-component">/basic/wiki/form-utils/get-component</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-utils/find-component/hello">/basic/wiki/form-utils/find-component/hello</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-utils/flattenComponents">/basic/wiki/form-utils/flattenComponents</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/form-utils/get-value">/basic/wiki/form-utils/get-value</Link>
                </li>
                <li>
                    <Link to="/basic/wiki/js-api/event/change">/basic/wiki/js-api/event/change</Link>
                </li>
                <li>
                    <Link to="/basic/examples/builder-render-submission/hello">/basic/examples/builder-render-submission/hello</Link>
                </li>
                <li>
                    <Link to="/basic/examples/dynamic-select-filtering/t1">/basic/examples/dynamic-select-filtering/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/conditional-wizard/t1">/basic/examples/conditional-wizard/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/conditional-wizard/t2">/basic/examples/conditional-wizard/t2</Link>
                </li>
                <li>
                    <Link to="/basic/examples/conditional-wizard/t3">/basic/examples/conditional-wizard/t3</Link>
                </li>
                <li>
                    <Link to="/basic/examples/wizard/url">/basic/examples/wizard/url</Link>
                </li>
                <li>
                    <Link to="/basic/examples/wizard/json">/basic/examples/wizard/json</Link>
                </li>
                <li>
                    <Link to="/basic/examples/simple-embedding/builder">/basic/examples/simple-embedding/builder</Link>
                </li>
                <li>
                    <Link to="/basic/examples/simple-embedding/text-field/t1">/basic/examples/simple-embedding/text-field/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/simple-embedding/select/t1">/basic/examples/simple-embedding/select/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/custom-wizard/t1">/basic/examples/wizard/json</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/t1">/basic/examples/json-powered-forms/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/button/t1">/basic/examples/json-powered-forms/button/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/email/t1">/basic/examples/json-powered-forms/email/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/select/t1">/basic/examples/json-powered-forms/select/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/data-grid/t1">/basic/examples/json-powered-forms/data-grid/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/select/t5">/basic/examples/json-powered-forms/select/t5</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/number/t1">/basic/examples/json-powered-forms/number/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/language/t1">/basic/examples/json-powered-forms/language/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/json-powered-forms/checkbox/t1">/basic/examples/json-powered-forms/checkbox/t1</Link>
                </li>
                <li>
                    <Link to="/basic/work/h5/t1">/basic/work/h5/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/select/custom/t1">/basic/examples/select/custom/t1</Link>
                </li>
                <li>
                    <Link to="/basic/examples/select/custom/t2">/basic/examples/select/custom/t2</Link>
                </li>
            </ul>
        </div>
    );
}
