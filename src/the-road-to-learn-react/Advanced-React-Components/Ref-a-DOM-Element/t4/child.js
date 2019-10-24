import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    childFun = () => {
        console.log('childFun');
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
                value='test'
                // ref={this.props.ref}
                readOnly
            ></input>
        );
    }
}

export default Child;