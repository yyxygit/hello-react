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
            const {forwardedRef, ...rest} = this.props;
            /**
             * 被包装的组件需要实例化返回对象
             * 所以WrappedComponent必须是react class 组件
             * 因为函数组件不能实例化，单例模式？
             */
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }
    return React.forwardRef((props, ref) => {
        return <WrappedComponent forwardedRef={ref} {...props} />;
    });
}

class FancyButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        /**
         * 通过其他参数属性名字，来传递ref
         * 感觉React.forwardRef包装组件方式，在高阶组件上不好理解
         * 不如直接使用t4a.js的方式，来的直观
         */
        return (
            <button
                className="FancyButton"
                ref={this.props.forwardedRef}
            >
                {this.props.label}
            </button>
        );
    }
}

export default logProps(FancyButton);