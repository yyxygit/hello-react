import React from 'react';

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        console.log("this.props: ", this.props);
        /**
         * this.props
         * @Object 对象，{name: Cathy}
         */
    }


    render() {
        /**
         * 在render内可以访问到对象定义中的 this.state 和 this.props 变量和参数值
         */
        return (
            <h1>
                Hello {this.props.name} !
            </h1>
        );
    }
}

export default HelloMessage;