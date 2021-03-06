import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import List from "./List3";
import Item from "./Item3";

// props.params
export default function () {
    return (
      <Router>
        <div>

            <Header />
            <h1>Hello, app3!</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/list" component={List} />
                <Route path='/detail/:id/:name/:price/:storage' component={Item} />
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
                <Link to="/list">List</Link>
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



