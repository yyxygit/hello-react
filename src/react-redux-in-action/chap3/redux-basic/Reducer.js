import * as ActionTypes from './action/ActionTypes';

/**
 * reducer 应该是一个纯函数，不应该产生任何副作用
 * 不改变传入的参数，返回全新的输出
 * @param state
 * @param action
 * @returns {*}
 */

export default (state, action) => {
    const {counterCaption} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state, [counterCaption]: state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state
    }
}