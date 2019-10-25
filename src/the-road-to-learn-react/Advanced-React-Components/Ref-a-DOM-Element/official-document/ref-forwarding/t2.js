import React, {Component} from 'react';

/**
 * 在高阶组件中转发 refs
 * 这个技巧对高阶组件（也被称为 HOC）特别有用。
 */

/**
 * 让我们从一个输出组件 props 到控制台的 HOC 示例开始：
 * “logProps” HOC 透传（pass through）所有 props 到其包裹的组件，
 * 所以渲染结果将是相同的。
 * 例如：我们可以使用该 HOC 记录所有传递到 “fancy button” 组件的 props：
 * @param WrappedComponent 被包裝的組件對象
 */
function logProps(WrappedComponent) {

    class LogProps extends Component {
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            /**
             * 被包装的组件需要实例化返回对象
             * 所以WrappedComponent必须是react class 组件
             * 因为函数组件不能实例化，单例模式？
             */
            return <WrappedComponent {...this.props} />
        }
    }
    return LogProps;
}

/**
 * 因為 function logProps(WrappedComponent) 输入的被包装参数对象是一个组件
 * @param props
 * @returns {*}
 * @constructor
 */
function FancyButton(props) {
    return (
        <button
            className="FancyButton"
        >
            {props.children}
        </button>
    );
}

class FancyButton3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className="FancyButton"
            >
                {this.props.children}
            </button>
        );
    }
}

/**
 * FancyButtonLP(...): Nothing was returned from render.
 * This usually means a return statement is missing.
 * Or, to render nothing, return null.
 * @param props
 * @returns {*}
 * @constructor
 */
function FancyButtonLP(props) {
    return (
        logProps(<button
            className="FancyButton"
        >
            {props.children}
        </button>)
    );
}

/**
 * FancyButtonLP2(...): Nothing was returned from render.
 * This usually means a return statement is missing.
 * Or, to render nothing, return null.
 * @param props
 * @returns {*}
 * @constructor
 */
function FancyButtonLP2(props) {
    return (
        logProps(FancyButton)
    );
}

function FancyButtonLP3(props) {
    return logProps(FancyButton3(props));
}

function FancyButtonLP4(props) {
    return logProps(<FancyButton3 {...props} />);
}

function FancyButtonLP5(props) {
    return logProps(FancyButton3);
}

class FancyButtonLP6 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return logProps(FancyButton3);
    }
}


class showButton extends Component {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
    }

    componentDidMount() {
        const btn = this.btnRef.current;
        console.log('btn:', btn);
    }

    render() {
        /**
         * Warning: Functions are not valid as a React child.
         * This may happen if you return a Component instead of <Component /> from render.
         * Or maybe you meant to call this function rather than return it.
         in FancyButtonLP6 (at t2.js:133)
         */
        return (
            <FancyButtonLP6
                ref={this.btnRef}
            >
                Click Me
            </FancyButtonLP6>
        );

        // return (
        //   <FancyButtonLP/>
        // );
    }
}

export default showButton;
