import React, {Component} from 'react';
import Proptypes from 'prop-types';
import * as Actions from '../action/Actions';
import CounterStore from '../store/CounterStore';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount() {
        /**
         * 在数据/业务模型上添加监听器
         * 在事件触发时被调用
         * CounterStore数据更新后，同步更新react显示组件state
         */
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState({
           count: CounterStore.getCounterValues()[this.props.caption],
        });
    }

    onClickIncrementButton = () => {
        /**
         * 调用方法，触发（派发）事件
         */
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton = () => {
        Actions.decrement(this.props.caption);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }


}

Counter.propTypes = {
  caption: Proptypes.string.isRequired,
};

export default Counter;