import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HelloT1 from './hello/t1';
import HelloT2 from './hello/t2';

export default function () {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hello/t1" component={HelloT1} />
                    <Route exact path="/hello/t2" component={HelloT2} />

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
                    <Link to="/hello/t1">/hello/t1</Link>
                </li>
                <li>
                    <Link to="/hello/t2">/hello/t2</Link>
                </li>
            </ul>
        </div>
    );
}

