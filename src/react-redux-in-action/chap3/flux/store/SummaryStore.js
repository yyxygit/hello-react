import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../action/ActionTypes';
import {EventEmitter} from 'events';
import CounterStore from './CounterStore';

const CHANGE_EVENT = 'changed';

function computerSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computerSummary(CounterStore.getCounterValues);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    }
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.DECREMENT ||
        action.type === ActionTypes.INCREMENT) {
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;