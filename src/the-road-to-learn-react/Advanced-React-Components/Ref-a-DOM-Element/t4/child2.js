import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        // 引用 input DOM 元素
        this.input = React.createRef();
    }

    childFun = () => {
        console.log('childFun');
    }

    /**
     * 将 DOM Refs 暴露给父组件
     在极少数情况下，你可能希望在父组件中引用子节点的 DOM 节点。
     通常不建议这样做，因为它会打破组件的封装，但它偶尔可用于触发焦点或测量子 DOM 节点的大小或位置。
     */
    activeInputFocus  = () => {
        // debugger;
        console.log('child2 this.input:', this.input);
        // 获得 input DOM 元素
        const ele = this.input.current;
        console.log('child2 this.input.current:', ele);
        ele.focus();
    }

    render() {
        /**
         * 出现 warning
         * Warning: Child: `ref` is not a prop.
         * Trying to access it will result in `undefined` being returned.
         * If you need to access the same value within the child component,
         * you should pass it as a different prop. (https://fb.me/react-special-props)
         * key 和 ref 不能作为 props 传递给子组件，他们是给 react组件元素自身使用的
         */
        return (
            <input
                type="text"
                defaultValue='test'
                ref={this.input}
            ></input>
        );
    }
}

export default Child;