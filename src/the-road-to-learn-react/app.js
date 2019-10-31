import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StylingComponents from './introduce-to-react/Styling-Components/t3';
import FetchingData from './Getting-Real-with-APIs/Client-Cache/t1';
import AxiosFetching from './Getting-Real-with-APIs/Axios-instead-of-Fetch/t1';
import ImportExport from './Code-Organization-and-Testing/Import-and-Export/t4/file2';
import PropTypesInterface from './Code-Organization-and-Testing/Component-Interface-with-PropTypes/t1';
import RefDomElement from './Advanced-React-Components/Ref-a-DOM-Element/official-document/ref-forwarding/t4b';
import LoadingMoreBtn from './Advanced-React-Components/Loading/t1';
import HigherOrderComponents from './Advanced-React-Components/Higher-Order-Components/t1';
import AdvancedSorting from './Advanced-React-Components/Advanced-Sorting/t3';
import LiftingState from './State-Management/Lifting-State/t1';
import RevisitedSetState from './State-Management/Revisited-setState/t2';

export default function () {
    // alert('aaa');
    return (
        <Router>
            <div>
                <h1>The road to learn React</h1>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/styling-components/test' component={StylingComponents} />
                    <Route path='/fetching-data/test' component={FetchingData} />
                    <Route path='/axios-instead-of-fetch/test' component={AxiosFetching} />
                    <Route path='/import-export/test' component={ImportExport} />
                    <Route path='/proptypes/test' component={PropTypesInterface} />
                    <Route path='/ref/test' component={RefDomElement} />
                    <Route path='/loading/test' component={LoadingMoreBtn} />
                    <Route path='/HigherOrderComponents/test' component={HigherOrderComponents} />
                    <Route path='/AdvancedSorting/test' component={AdvancedSorting} />
                    <Route path='/LiftingState/test' component={LiftingState} />
                    <Route path='/RevisitedSetState/test' component={RevisitedSetState} />
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
                    <Link to="/styling-components/test">styling-components</Link>
                </li>
                <li>
                    <Link to="/fetching-data/test">fetching-data</Link>
                </li>
                <li>
                    <Link to="/axios-instead-of-fetch/test">axios-fetching-data</Link>
                </li>
                <li>
                    <Link to="/import-export/test">import-export</Link>
                </li>
                <li>
                    <Link to="/proptypes/test">proptypes</Link>
                </li>
                <li>
                    <Link to="/ref/test">RefDomElement</Link>
                </li>
                <li>
                    <Link to="/loading/test">loading</Link>
                </li>
                <li>
                    <Link to="/HigherOrderComponents/test">Higher Order Components</Link>
                </li>
                <li>
                    <Link to="/AdvancedSorting/test">Advanced Sorting</Link>
                </li>
                <li>
                    <Link to="/LiftingState/test">Lifting State</Link>
                </li>
                <li>
                    <Link to="/RevisitedSetState/test">Revisited SetState</Link>
                </li>
            </ul>
        </div>
    );
}
