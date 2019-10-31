import * as ActionTypes from './ActionTypes';
import AppDispatcher from '../AppDispatcher';

/**
 * action 的 构造函数
 *
 * {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption,
    }
 * action 顾名思义 代表 一个“ 动作”， 不过 这个 动作 只是 一个 普通 的 JavaScript 对象， 代表 一个 动作 的 纯 数据，
 * 调用执行动作方法，将动作数据对象，派发？
 *
 * 能够 产生 并 派 发 action 对象 的 函数。

 */

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption,
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption,
    });
};