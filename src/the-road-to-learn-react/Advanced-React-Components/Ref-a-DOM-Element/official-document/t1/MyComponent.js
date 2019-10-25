import React, {Component} from 'react';


/**
 * Refs and the DOM
 * https://zh-hans.reactjs.org/docs/refs-and-the-dom.html
 * what is Ref ?
 * Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。
 * 在典型的 React 数据流中，props 是父组件与子组件交互的唯一方式。
 * 要修改一个子组件，你需要使用新的 props 来重新渲染它。
 *
 * 但是，在某些情况下，你需要在典型数据流之外强制修改子组件。
 * 被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。
 * 对于这两种情况，React 都提供了解决办法。
 * 何时使用 Refs ?
 下面是几个适合使用 refs 的情况：

 管理焦点，文本选择或媒体播放。
 触发强制动画。
 集成第三方 DOM 库。
 * 基本都是涉及直接操作DOM元素，或react子组件元素，涉及DOM API 调用
 *
 * 避免使用 refs 来做任何可以通过声明式实现来完成的事情。[?]

 举个例子，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。
 * [是否弹出显示/隐藏 对话框,通过传递props属性来控制]
 *
 * 注意
 * [ old project react 15.4.2 所以使用向ref属性赋值匿名回调函数的方法 ]
 下面的例子已经更新为使用在 React 16.3 版本引入的 React.createRef() API。
 如果你正在使用一个较早版本的 React，我们推荐你使用回调形式的 refs。

 过时 API：String 类型的 Refs
 如果你之前使用过 React，你可能了解过之前的 API 中的 string 类型的 ref 属性，
 例如 "textInput"。你可以通过 this.refs.textInput 来访问 DOM 节点。
 我们不建议使用它，因为 string 类型的 refs 存在 一些问题。
 https://github.com/facebook/react/pull/8333#issuecomment-271648615
 它已过时并可能会在未来的版本被移除。
 *
 * 创建 Refs
 Refs 是使用 React.createRef() 创建的， [该方法应该返回的是一个匿名函数, 类似 function getRef(node) { this.getRef = node } ]
 并通过 ref 属性附加到 React 元素。
 在构造组件时，通常将 Refs 分配给实例属性，以
 便可以在整个组件中引用它们。
 */

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

    }

    /**
     * 访问 Refs
     当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。

     ref 的值根据节点的类型而有所不同：

     当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
     当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
     你不能在函数组件上使用 ref 属性，因为他们没有实例。
     */
    componentDidMount() {
        const inputDomNode = this.inputRef.current;
        if(inputDomNode) {
            inputDomNode.focus();
        }
    }

    render() {
        return (
          <input
              type="text"
              defaultValue="test"
              ref={this.inputRef}
          />
        );
    }
}

export default MyComponent;
