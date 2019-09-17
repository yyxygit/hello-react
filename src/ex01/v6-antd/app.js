import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
// import Form5 from "./Form5";
import Form4 from "./Form4-b";
import Form6 from "./Form6";
import Form7 from "./Form7";
import Form8 from "./Form8";

// props.params
export default function () {
    return (
      <Router>
        <div>

            <Header />
            <h1>Hello, app1! - v6-antd</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/Form1' component={Form1} />
                <Route path='/Form2' component={Form2} />
                <Route path='/Form4' component={Form4} />
                <Route path='/Form7' component={Form7} />
                <Route path='/Form6' component={Form6} />
                <Route path='/Form8' component={Form8} />
            </Switch>
        </div>
      </Router>
    );
}

function Header() {
    return (
        <ul className="Menu-list">
            {/*<li>*/}
            {/*    <Link to="/Form1">form 1 from V5 - antd</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/Form2">form 2 完全受控子组件 - antd简单优化 1</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/Form4">form 4 完全受控子组件 - antd简单优化 2</Link>*/}
            {/*</li>*/}
            <li>
                <Link to="/Form6">form 6 完全受控子组件 - antd table 1</Link>
            </li>
            <li>
                <Link to="/Form7">form 7 无记录添加bug</Link>
            </li>
            <li>
                <Link to="/Form8">form 8 add/edit popup 做组件</Link>
            </li>
        </ul>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}




