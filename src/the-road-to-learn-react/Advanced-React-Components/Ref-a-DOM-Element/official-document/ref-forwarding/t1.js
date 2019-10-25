import React, {Component} from 'react';

function FancyButton(props) {
    return (
      <button
        className="FancyButton"
      >
          {props.children}
      </button>
    );
}

const FancyButtonFR = React.forwardRef((props, ref) => {
    return (
        <button
            className="FancyButton"
            ref={ref}
        >
            {props.children}
        </button>
    );
})

class ShowButton extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        const buttonDomNode = this.buttonRef.current;
        // debugger;
        console.log('buttonDomNode:', buttonDomNode);
    }

    render() {
        return (
          <FancyButtonFR ref={this.buttonRef}>
              Click me!
          </FancyButtonFR>
        );
    }
}

/**
 * 以下是对上述示例发生情况的逐步解释：

 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 buttonRef 变量。
 我们通过指定 buttonRef 为 JSX 属性，将其向下传递给 <FancyButtonFR ref={buttonRef}>。
 React 传递 ref 给 fowardRef 内函数 (props, ref) => ...，作为其第二个参数。
 我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
 当 buttonRef 挂载完成，buttonRef.current 将指向 <button> DOM 节点。
 */

export default ShowButton;

