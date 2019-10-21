import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GetTimestamp from "./getNow/getTimestamp/t1";

export default function () {
    // alert('aaa');
    return (
        <Router>
            <div>
                <h1>Hello, Moment.js</h1>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/get-timestamp' component={GetTimestamp} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <ul className="Menu-list">
                <li>
                    <Link to="/get-timestamp">get-timestamp</Link>
                </li>
                {/*<li>*/}
                {/*    <Link to="/Form7">form 7 无记录添加bug</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/Form8">form 8 add/edit popup 做组件</Link>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}

