import React, {Component} from 'react';

class ExplainBindingsComponent extends Component {

    constructor() {
        /**
         * 没有用到this.props时，
         * 构造函数里不初始化props也可以
         */
        super();
    }

    /**
     * 类方法可以通过 ES6 的箭头函数做到自动地绑定
     * 箭头函数没有自己内部的this
     * 会自动向上层栈寻找调用该函数的对象
     * this会自动指向匿名函数定义时所在的上下文环境
     */
    onClickMe = () => {
        // alert('aaa');
        /**
         * onClickMe ExplainBindingsComponent
         * this指向react ExplainBindingsComponent类的实例对象
         */
        console.log('onClickMe', this);
    }

    render() {
        return (
          <button
            onClick={this.onClickMe}
            type="button"
          >
              Click Me
          </button>
        );
    }
}

export default ExplainBindingsComponent;