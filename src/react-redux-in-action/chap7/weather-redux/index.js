import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import Store from './Store';

class Chap7 extends Component {
    render() {
        return (
            <Provider store={Store}>
                <App />
            </Provider>
        );
    }
}

export default Chap7;