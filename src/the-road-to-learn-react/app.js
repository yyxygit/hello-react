import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StylingComponents from './introduce-to-react/Styling-Components/t3';
import FetchingData from './Getting-Real-with-APIs/Client-Cache/t1';
import AxiosFetching from './Getting-Real-with-APIs/Axios-instead-of-Fetch/t1';
import ImportExport from './Code-Organization-and-Testing/Import-and-Export/t4/file2';
import PropTypesInterface from './Code-Organization-and-Testing/Component-Interface-with-PropTypes/t1';
import RefDomElement from './Advanced-React-Components/Ref-a-DOM-Element/t4/parent';

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
            </ul>
        </div>
    );
}
