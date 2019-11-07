import * as ActionTypes from './ActionTypes.js';

/**
 * flux 是调用action函数，执行分发 dispatch动作
 * redux是调用action函数，返回一个代表该动作的js对象
 * 包含动作类型 type
 * 及其他动作识别参数，如counterCaption
 *
 * 纯函数，没有副作用
 * 输出只取决于输入，不受其他外部变量影响，也不影响（作用于）外部环境
 *
 * @param counterCaption
 * @returns {{counterCaption: *, type: string}}
 */
export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};