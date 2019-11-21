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
// import BrsHello from './formio-js/examples/Custom-Components/t1';
import BrsHello from './formio-js/examples/Custom-Components/t2';

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
            </ul>
        </div>
    );
}
