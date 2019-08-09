import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import List from "./List1";
import Item from "./Item1";
// import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

// props.params
export default function () {
    return (
      <Router>
        <div>

            <Header />
            <h1>Hello, app1! - v3</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/list" component={List} />
                <Route path='/detail' component={Item} />
                <Route path='/search3' component={Form3} />
                <Route path='/search2' component={Form2} />
                <Route path='/search4' component={Form4} />
            </Switch>
        </div>
      </Router>
    );
}

function Header() {
    return (
        <ul className="Menu-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/search2">search2</Link>
            </li>
            <li>
                <Link to="/search3">search3</Link>
            </li>
            <li>
                <Link to="/search4">search4</Link>
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

function About() {
    return (
        <div>
            <h2>This is an Exercise!</h2>
        </div>
    );
}



