import React, {Component} from 'react';
// import Child from './child';
import Child from './child2';

/**
 * React 文档  -  Ref & DOM
 * https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component
 */

class Parent extends Component {
    constructor(props) {
        super(props);
        // child子组件实例的引用
        this.childRef = React.createRef();
    }

    componentDidMount() {
        /**
         * this.childRef.current 是 child组件实例
         * 可以实现在父组件中调用子组件的方法
         */
        const child = this.childRef.current;
        if(child) {
            child.childFun();
            child.activeInputFocus();
        }
    }

    render() {
        /**
         * 虽然你可以向子组件添加 ref，但这不是一个理想的解决方案，
         * 因为你只能获取组件实例而不是 DOM 节点。
         */
        return (
            <Child ref={this.childRef} />
        );
    }
}

export default Parent;