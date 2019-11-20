import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test1";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test2";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test3";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test4";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test5";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test6";
// import HelloBase64 from "./pdf-dist/react-formio/Base64/test7";
import HelloBase64 from "./pdf-dist/hello/Base64/test8";
import DownloadTest from './download/test1';


export default function () {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/hello/base64' component={HelloBase64} />
                    <Route path='/download/test' component={DownloadTest} />
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
            <h2>pdf-dist</h2>
            <ul className="Menu-list">
                <li>
                    <Link to="/hello/base64">/hello/Base64</Link>
                </li>
                <li>
                    <Link to="/download/test">/download/test</Link>
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
