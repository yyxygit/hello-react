import React, {Component} from 'react';

class ExplainBindingsComponent extends Component {

    constructor() {
        /**
         * 没有用到this.props时，
         * 构造函数里不初始化props也可以
         */
        super();
        this.onClickMe = this.onClickMe.bind(this);
    }

    onClickMe() {
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
              /**
               * 类方法的绑定也可以写起其他地方，比如写在 render() 函数中
               * 但是你应该避免这样做，因为它会在每次 render() 方法执行时绑定类方法。
               * 总结来说组件每次运行更新时都会导致性能消耗。
               * 当在构造函数中绑定时，绑定只会在组件实例化时运行一次，这样做是一个更好的方式。
               */
            // onClick={this.onClickMe.bind(this)}
            type="button"
          >
              Click Me
          </button>
        );
    }
}

export default ExplainBindingsComponent;