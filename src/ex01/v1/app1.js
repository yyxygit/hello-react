import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function () {
    return (
      <Router>
        <div>

            <Header />
            <h1>Hello, EX01!</h1>

            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
}

function Header() {
    return (
        <ul>
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

function List() {
    return (
        <div>
            <h2>List</h2>
        </div>
    );
}


function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

