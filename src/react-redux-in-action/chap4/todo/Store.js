import {createStore, combineReducers, applyMiddleware,compose} from 'redux';

import thunkMiddleware from 'redux-thunk';

import {reducer as todoReducer} from './todos/index';
import {reducer as filterReducer} from './filter/index';

/**
 * Failed to compile
 ./node_modules/react-addons-perf/index.js
 Module not found: Can't resolve 'react-dom/lib/ReactPerf' in '/Users/cathy/develop/project/webstorm/github/hello-react/node_modules/react-addons-perf'
 * https://reactjs.org/docs/perf.html
 * Note:
 As of React 16, react-addons-perf is not supported.
 Please use your browser’s profiling tools to get insight into which components re-render.
 * https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab
 * https://zh-hans.reactjs.org/docs/optimizing-performance.html
 * 中文版 性能分析 使用react-dev-tools
 */
// import Pref from 'react-addons-perf';

const win = window;
// win.Pref = Pref;

const reducer = combineReducers({
    /**
     * key使用模块文件夹名
     * 参数对象的每个字段名对应了State状态上的字段名
     * 参见4.5.1 Store 结构字段
     * combineReducers函数返回一个新的reducer函数，
     * 当这个新的reducer函数被执行时，
     * 会把传入的state参数对象拆开处理，
     * todo字段下的子状态交给todoReducer，
     * filter字段下的子状态交给filterReducer，
     * 然后再把这两个调用的返回结果合并成一个新的state，
     * 作为整体reducer函数的返回结果。
     * 程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1655-1658). 机械工业出版社. Kindle 版本.
     */
    todos: todoReducer,
    filter: filterReducer
});

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunkMiddleware] :
    [thunkMiddleware];

const storeEnhancer = compose(
    applyMiddleware(...middleware),
    (win && win.devToolsExtension) ?
        win.devToolsExtension() : (f) => f,
);

// export default createStore(reducer);
// export default createStore(todoReducer);

export default createStore(reducer, {}, storeEnhancer);
