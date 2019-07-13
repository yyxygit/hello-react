import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function () {
    return (
      <Router>
        <div>

            <Header />
            <h1>Hello, EX01!</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/about" component={About} />
                <Route path='/detail/:id' component={Item} />
                <Route path="/item" component={Item} />
            </Switch>
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
                <Link to="/item">Item</Link>
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
            <h2>About</h2>
        </div>
    );
}

function List() {
    return (
        <div>
            <h2>List</h2>
            <ul>
                <li>
                    <Link to='/detail/1'>item 1</Link>
                </li>
                <li>
                    <Link to='/detail/2'>item 2</Link>
                </li>
            </ul>


        </div>
    );
}

function Item({match}) {
    return (
      <div>
          <h3>visit item: {match.url}</h3>
          <Link to="/list">List</Link>
      </div>
    );
}

