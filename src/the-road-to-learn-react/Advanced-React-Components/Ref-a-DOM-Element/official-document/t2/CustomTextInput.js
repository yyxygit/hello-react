import React, {Component} from 'react';

/**
 * 为 DOM 元素添加 ref
 以下代码使用 ref 去存储 DOM 节点的引用

 React 会在组件挂载时给 current 属性传入 DOM 元素，
 并在组件卸载时传入 null 值。
 ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。
 */

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.textInputRef = React.createRef();
    }

    focusTextInput = () => {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        this.textInputRef.current.focus();
    }

    render() {
        // 告诉 React 我们想把 <input> ref 关联到
        // 构造器里创建的 `textInput` 上
        return (
            <div>
                <input
                    type="text"
                    defaultValue="test input"
                    ref={this.textInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

export default CustomTextInput;