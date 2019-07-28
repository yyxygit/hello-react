import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * <Route exact path="/" component={Home} />
 * 根路径设置 精确匹配 exact
 * 其他路径都符合根路径，所以也会精确匹配
 *
 * 在匹配 http://localhost:3000/topics/rendering 时
 * 先匹配 <Route path="/topics" component={Topics} />
 * 因为 match对象的 isExact = false 如果非精确匹配，就会先渲染 Topics 组件
 * 再匹配 <Route path={`${match.path}/:topicId`} component={Topic} />
 * match对象的 isExact = true 渲染 Topic React对象
 *
 * match object doc
 * https://reacttraining.com/react-router/web/api/match
 *
 *  Route component as this.props.match
 *  Route render as ({ match }) => ()
 * component 属性 是 ReactComponent 对象时，可以通过 this.props.match 访问
 * 因为 Topics / Topic 都是 react对象，即函数，其实Route使用render直接渲染
 * 所以 函数内传入 ({ match }) => ()
 *
 * @returns {*}
 * @constructor
 */
function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
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

function Topics({ match }) {
    // debugger;
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

/**
 *
 * @param match object see
 * https://reacttraining.com/react-router/web/api/match
 *
 * @param history <not available>
 * https://reacttraining.com/react-router/web/api/history
 * hsitory对象是可变的，不一定准确
 * see https://github.com/ReactTraining/history
 * 
 * window.location & window.history 对象 MDN
 * app 页面使用中，发现还是浏览器原生的windows对象方法跳转地址比较可靠
 * react route 的 history 对象（即history库）不一定有效果
 *
 * @param location object see
 * https://reacttraining.com/react-router/web/api/location
 * @returns {*}
 * @constructor
 */

function Topic({ match, history, location }) {
    // debugger;
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default BasicExample;
