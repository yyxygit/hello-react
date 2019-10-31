import React, {Component} from 'react';
import PropTypes from 'prop-types';

const buttonStyle= {
    margin: '10px',
};

class Counter extends Component {
    constructor(props) {

        console.log('enter constructor: ' + props.caption);
        super(props);

        this.state = {
            /**
             * count 计数器计数
             * 是组件count自身维护的状态（数据）
             * 与外部其他组件无关
             * count初始化值，由props外部接口获得
             */
            count: props.initValue,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }

    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption);
    }

    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption);
    }

    updateCount = (isIncrement) => {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        // 更新自身状态 count
        this.setState({
            count: newValue,
        });
        /**
         * 调用参数方法，将数据传递到父组件
         * 来更新父组件状态 sum
         */
        this.props.onUpdate(previousValue, newValue);
    }

    onClickIncrementButton = () => {
        // this.setState({count: this.state.count + 1});
        /**
         * 语句超过一行代码
         * 与onClickDecrementButton重复
         * 提取成可重用的代码 updateCount
         */
        this.updateCount(true);
    }

    onClickDecrementButton = () => {
        // this.setState({count: this.state.count - 1});
        this.updateCount(false);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
            <div>
                <button
                    style={buttonStyle}
                    onClick={this.onClickIncrementButton}>
                    +
                </button>
                <button
                    style={buttonStyle}
                    onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }

}

/**
 * 设置Counter组件 props 参数格式
 * @type {{caption: *, initValue: *}}
 */
Counter.propTypes = {
    /**
     * caption属性，String类型
     * 组件创建时必须外部提供
     */
    caption: PropTypes.string.isRequired,
    /**
     * initValue属性，Number类型
     * 组件实例化时，可以不提供，因为下面设置了默认值
     */
    initValue: PropTypes.number,
    onUpdate: PropTypes.func,
};

/**
 * 设置组件props参数的默认值
 * @type {{initValue: number}}
 * 原先的写法是，在constructor中
 * this.state = {
 *     count: props.initValue || 0
 * }
 * 如果没有从外部props获得属性值，就设置默认值0
 */
Counter.defaultProps = {
    initValue: 0,
    /**
     * 什么都不做的函数
     * 原样返回 ??
     * @param f
     * @returns {*}
     */
    onUpdate: f => f,
};

// 模块导出
export default Counter;