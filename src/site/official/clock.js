import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID  = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }


    render() {
        /**
         * <h2>It is {this.state.date.toLocaleTimeString()}</h2>
         */
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

/**
 * https://zh-hans.reactjs.org/docs/components-and-props.html
 * 函数组件与 class 组件
 * 该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。
 * 这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
 * 同时还可以使用 ES6 的 class 来定义组件
 */
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default Clock;