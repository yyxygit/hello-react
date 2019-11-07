import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as weatherReducer} from './weather';

const reducer = combineReducers({
    weather: weatherReducer,
});

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

/**
 * {} 没有初始化state数据
 */
export default createStore(reducer, {}, storeEnhancers);