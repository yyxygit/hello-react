import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../action/ActionTypes';
import {EventEmitter} from 'events';

/**
 * EventEmitter 事件发生器 对象
 * https://javascript.ruanyifeng.com/nodejs/events.html
 * on方法，为事件添加监听器
 * emit方法，触发事件，回调监听器函数
 * removeListener方法，为事件去除监听器
 *
 * ·emit 函数， 可以 广播 一个 特定 事件， 第一个 参数 是 字符串 类型 的 事件 名称；
 ·on 函数， 可以 增加 一个 挂在 这个 EventEmitter 对象 特定 事件 上 的 处理 函数， 第一个 参数 是 字符串 类型 的 事件 名称， 第二个 参数 是 处理 函数；
 对于 CounterStore 对象， emitChange、 addChangeListener 和 removeChangeListener 函数 就是 利用 EventEmitter 上述 的 三个 函数 完成 对 CounterStore 状态 更新 的 广播、 添加 监听 函数 和 删除 监听 函数 等 操作。

 程墨. 深入浅出React和Redux (实战) (Kindle 位置 940-942). 机械工业出版社. Kindle 版本.
 */

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20,
};

/**
 * CounterStore 继承 EventEmitter 类
 * @type {{} & EventEmitter & {emitChange: emitChange, getCounterValues: (function(): {Second: number, Third: number, First: number}), addChangeListener: addChangeListener}}
 */
const CounterStore = Object.assign({}, EventEmitter.prototype, {
   getCounterValues: function () {
       return counterValues;
   },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption] --;
        CounterStore.emitChange();
    }
});

export default CounterStore;