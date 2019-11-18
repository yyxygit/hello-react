import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import EmbedT1 from './hello-react-formio/Embed/t1';
import EmbedT2 from './hello-react-formio/Embed/t2';


export default function () {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/hello/embed/t1' component={EmbedT1} />
                    <Route path='/hello/embed/t2' component={EmbedT2} />
                    {/*<Route path='/chap3/flux' component={Chap3} />*/}
                    {/*<Route path='/chap6/use' component={Chap6} />*/}
                    {/*<Route path='/chap7/weather' component={Weather} />*/}
                    {/*<Route path='/ref/test' component={RefDomElement} />*/}
                    {/*<Route path='/loading/test' component={LoadingMoreBtn} />*/}
                    {/*<Route path='/HigherOrderComponents/test' component={HigherOrderComponents} />*/}
                    {/*<Route path='/AdvancedSorting/test' component={AdvancedSorting} />*/}
                    {/*<Route path='/LiftingState/test' component={LiftingState} />*/}
                    {/*<Route path='/RevisitedSetState/test' component={RevisitedSetState} />*/}
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
                    <Link to="/hello/embed/t1">/hello/embed/t1</Link>
                </li>
                <li>
                    <Link to="/hello/embed/t2">/hello/embed/t2</Link>
                </li>
                {/*<li>*/}
                {/*    <Link to="/chap3/flux">Chap3</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/chap6/use">Chap6</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/chap7/weather">Chap7 weather</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/ref/test">RefDomElement</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/loading/test">loading</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/HigherOrderComponents/test">Higher Order Components</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/AdvancedSorting/test">Advanced Sorting</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/LiftingState/test">Lifting State</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/RevisitedSetState/test">Revisited SetState</Link>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}
