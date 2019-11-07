import React, {Component} from 'react';
import CountDown from "./CountDown";

class Use1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CountDown startCount={10}>
                {
                    (count) => <div>{count}</div>
                }
            </CountDown>
        );
    }
}

class Use2 extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.count !== this.state.count;
    }

    render() {
        return (
            <CountDown startCount={10}>
                {
                    (count) => <div>{count > 0 ? count : '新年快乐！'}</div>
                }
            </CountDown>
        );
    }
}

export default Use2;