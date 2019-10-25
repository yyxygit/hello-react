import React, {Component} from 'react';
import CustomTextInput from "./CustomTextInput";

/**
 * 为 class 组件添加 Ref
 如果我们想包装上面的 CustomTextInput，
 来模拟它挂载之后立即被点击的操作，
 我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 focusTextInput 方法：
 */

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        // 创建对CustomTextInput子组件的引用ref
        this.customTextInputRef = React.createRef();
    }

    componentDidMount() {
        // ref current 引用的是子组件实力对象
        const customTextInput = this.customTextInputRef.current;
        customTextInput.focusTextInput();
    }

    render() {
        // 绑定ref到该子组件
        /**
         * 请注意，这仅在 CustomTextInput 声明为 class 时才有效：
         * Refs 与函数组件
         * 你不能在函数组件上使用 ref 属性，因为它们没有实例:
         * 如果你需要使用 ref，你应该将组件转化为一个 class，就像当你需要使用生命周期钩子或 state 时一样。
         * 不管怎样，你可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件：
         * CustomTextInput2
         */
        return (
          <CustomTextInput ref={this.customTextInputRef} />
        );
    }

}

function CustomTextInput2(props) {
    // 这里必须声明 textInput，这样 ref 才可以引用它
    let textInput = React.createRef();

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput} />

            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}

export default AutoFocusTextInput;