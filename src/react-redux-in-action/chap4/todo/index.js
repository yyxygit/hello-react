import React from 'react';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';
import Store from './Store';

export default function () {
    return (
        <Provider store={Store}>
            <TodoApp />
        </Provider>
    );
}