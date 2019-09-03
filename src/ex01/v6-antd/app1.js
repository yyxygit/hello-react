import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
// import Form3 from "./Form3";
// import Form4 from "./Form4";

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
                {/*<Route path='/search3' component={Form3} />*/}
                {/*<Route path='/search4' component={Form4} />*/}
            </Switch>
        </div>
      </Router>
    );
}

function Header() {
    return (
        <ul className="Menu-list">
            <li>
                <Link to="/Form1">form 1 - antd</Link>
            </li>
            <li>
                <Link to="/Form2">form 2 - antd简单优化</Link>
            </li>
            {/*<li>*/}
            {/*    <Link to="/search3">search3</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/search4">search4</Link>*/}
            {/*</li>*/}
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




