import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './css/app.css';

// import ClickCounter from './chap1/click-counter/t1';
import ClickCounter from './chap1/click-counter/t2';
// import ControlPanel from './chap2/t1/ControlPanel';
// import ControlPanel from './chap2/t2/ControlPanel';
// import ControlPanel from './chap2/t3/ControlPanel';
import ControlPanel from './chap2/t4/ControlPanel';
import Flux from './chap3/flux/view/ControlPanel';

export default function () {
    return (
        <Router>
            <div>
                <h1>react & redux in action</h1>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/click-counter/test' component={ClickCounter} />
                    <Route path='/chap2/control-panel' component={ControlPanel} />
                    <Route path='/chap3/flux' component={Flux} />
                    {/*<Route path='/import-export/test' component={ImportExport} />*/}
                    {/*<Route path='/proptypes/test' component={PropTypesInterface} />*/}
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
            <h2>Home</h2>
            <ul className="Menu-list">
                <li>
                    <Link to="/click-counter/test">/chap1/click-counter</Link>
                </li>
                <li>
                    <Link to="/chap2/control-panel">/chap2/control-panel</Link>
                </li>
                <li>
                    <Link to="/chap3/flux">Chap3 flux</Link>
                </li>
                {/*<li>*/}
                {/*    <Link to="/import-export/test">import-export</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/proptypes/test">proptypes</Link>*/}
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
