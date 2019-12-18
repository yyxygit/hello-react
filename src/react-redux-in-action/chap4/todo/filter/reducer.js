import {SET_FILTER} from "./actionTypes";
import {FilterTypes} from "../constants";

export default (state = FilterTypes.ALL, action) => {
    switch (action.type) {
        case SET_FILTER: {
            /**
             * 这个reducer更加简单，
             * 所做的就是把ReduxStore上filter字段的值设为action对象上的filter值。
             程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1693-1694). 机械工业出版社. Kindle 版本.
             */
            return action.filter;
        }
        default:
            return state;
    }
}