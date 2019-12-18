import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actionTypes";

/**
 * todos模块对应的Store状态树
 * Store：{
 *     todos: [
 *         {
 *             id: 0,
 *             text: 'aaa',
 *             complete: false
 *         },
 *         {
 *             id: 1,
 *             text: 'bbb',
 *             complete: true
 *         }
 *         ...
 *     ],
 *     filter: COMPLETE
 * }
 * 所以传入reduce的state默认是一个空数组，可能有数据
 */

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
           return [
               {
                   id: action.id,
                   text: action.text,
                   completed: false
               },
               ...state
           ];
        }
        case TOGGLE_TODO: {
            /**
             * 返回一个state数组的复制品，
             * 改变对应item的完成布尔值
             */
            return state.map(todoItem => {
                if (todoItem.id === action.id) {
                    /**
                     * 创建新对象，新的引用值
                     * 复制其他不变属性
                     * 布尔值取反
                     */
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    };
                } else {
                    /**
                     * 不改变该item任何数据，
                     * item引用不变
                     */
                    return todoItem;
                }
            });
        }
        case REMOVE_TODO: {
            /**
             * 将要删除的item过滤去除
             * filter 根据返回的判断条件布尔结果，来过滤
             */
            return state.filter(todoItem => {
               return  todoItem.id !== action.id;
            });
        }
        default: {
            /**
             * 默认处理
             * 不改变任何state，原样返回
             * 因为reducer函数会接收到任意action，
             * 包括它根本不感兴趣的action，
             * 这样就会执行default中的语句，
             * 应该将state原样返回，表示不需要更改state。
             程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1688-1689). 机械工业出版社. Kindle 版本.
             */
            return state;
        }
    }
}