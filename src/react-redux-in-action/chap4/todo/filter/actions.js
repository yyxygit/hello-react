import {SET_FILTER} from "./actionTypes";

export const setFilter = (filterType) => ({
   type: SET_FILTER,
    /**
     * filter
     * state 字段属性名，
     * 参见 src/react-redux-in-action/chap4/todo/filter/actions.js
     * 或book state状态树数据结构设计
     */
   filter: filterType
});