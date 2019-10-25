import React, {Component} from 'react';

/**
 * 回调 Refs
 React 也支持另一种设置 refs 的方式，称为“回调 refs”。
 它能助你更精细地控制何时 refs 被设置和解除。[?]

 不同于传递 createRef() 创建的 ref 属性，你会传递一个函数。
 这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。

 下面的例子描述了一个通用的范例：
 使用 ref 回调函数，在实例的属性中存储对 DOM 节点的引用。
 */

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInputRef = null;
    }

    setTextInputRef = (node) => {
        this.textInputRef = node;
    }

    focusTextInput = () => {
        // 使用原生 DOM API 使 text 输入框获得焦点
        if (this.textInputRef) this.textInputRef.focus();
    }

    /**
     * React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，
     * 当卸载时调用它并传入 null。
     * 在 componentDidMount 或 componentDidUpdate 触发前，
     * React 会保证 refs 一定是最新的。
     *
     */

    render() {
        return (
            <div>
                <input
                    type="text"
                    defaultValue="test input"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default CustomTextInput;