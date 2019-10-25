import React, {Component} from 'react';

/**
 * 你可以在组件间传递回调形式的 refs，就像你可以传递通过 React.createRef() 创建的对象 refs 一样。
 * 在上面的例子中，
 * Parent 把它的 refs 回调函数当作 inputRef props 传递给了 CustomTextInput，
 * 而且 CustomTextInput 把相同的函数作为特殊的 ref 属性传递给了 <input>。
 * 结果是，在 Parent 中的 this.inputElement 会被设置为与 CustomTextInput 中的 input 元素相对应的 DOM 节点。
 */

class Parent extends Component {
    constructor(props) {
        super(props);
        this.inputDomNode = null;
    }

    componentDidMount() {
        if(this.inputDomNode) {
            // debugger;
            /**
             * 获取的引用是DOM node 元素节点
             * 可以直接调用DOM API方法
             * 回调形式的 refs 不使用createRef方法，所以没有current属性
             */
            this.inputDomNode.focus();
        }
    }

    setTextInputRef = (node) => {
        this.inputDomNode = node;
    }

    render() {

        return (
            <CustomTextInput
                inputRef={ (node) => {this.inputDomNode = node;} }
            />
        );

        /**
         * 关于回调 refs 的说明
         如果 ref 回调函数是以内联函数的方式定义的，
         在更新过程中它会被执行两次，
         第一次传入参数 null，
         然后第二次会传入参数 DOM 元素。
         这是因为在每次渲染时会创建一个新的函数实例，
         所以 React 清空旧的 ref 并且设置新的。
         通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，
         但是大多数情况下它是无关紧要的。

        return (
            <CustomTextInput
                inputRef={ this.setTextInputRef }
            />
        );
         */
    }
}

function CustomTextInput(props) {
    return (
        <div>
            <input
                ref={props.inputRef}
                defaultValue="test input"
                type="text"
            />
        </div>
    );
}

export default Parent;