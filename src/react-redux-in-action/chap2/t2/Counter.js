/**
 * 报错：
 * TypeError: Cannot read property 'string' of undefined
 * line：caption: PropTypes.string.isRequired,
 * 原因：
 * 样例 code 用 react 15.4.1
 * 当前project使用 react 16.8.6
 * PropTypes从React中分离成单独的模块

import React, {Component, PropTypes} from 'react';*/

/**
 * 参考
 * src/the-road-to-learn-react/Code-Organization-and-Testing/Component-Interface-with-PropTypes/t1.js
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const buttonStyle= {
    margin: '10px',
};

class Counter extends Component {
    constructor(props) {
        /**
         * 可以打印 enter constructor: First
         * 若没有 super(props);则其他方法无法读取props
         * 参考：https://overreacted.io/zh-hans/why-do-we-write-super-props/
         * JavaScript 强制你在使用 this 之前先行调用 super
         * class fields proposal 出台后，
         * 这些坑大部分都会自然地消失在没有显示的定义构造函数的情况下，
         * 以上的属性都会被自动地初始化。
         * 可以省略构造函数，直接在类中写 state = {...}
         * 见 https://github.com/tc39/proposal-class-fields
         * https://juejin.im/post/5a694be551882573541c8f29
         *
         * https://zh-hans.reactjs.org/docs/react-component.html
         * 在 React 组件挂载之前，会调用它的构造函数。
         * 在为 React.Component 子类实现构造函数时，
         * 应在其他语句之前前调用 super(props)。
         * 否则，this.props 在构造函数中可能会出现未定义的 bug。
         * 通常，在 React 中，构造函数仅用于以下两种情况：

         1，通过给 this.state 赋值对象来初始化内部 state。
         2，为事件处理函数绑定实例
         * 1，通过class-fields可以直接在类中声明
         * 2，可以通过箭头函数自动绑定
         * 所以，可以不需要写constructor了
         */
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

    onClickIncrementButton = () => {
        // this.setState({count: this.state.count + 1});
        /**
         * 控制台没有出现书中的warning
         * warning Do not mutate state directly. Use setState() react/ no- direct- mutation- state
         程墨. 深入浅出React和Redux (实战) (Kindle位置560). 机械工业出版社. Kindle 版本.
         */
        this.state.count = this.state.count + 1;
    }

    onClickDecrementButton = () => {
        this.setState({count: this.state.count - 1});
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
};

// 模块导出
export default Counter;