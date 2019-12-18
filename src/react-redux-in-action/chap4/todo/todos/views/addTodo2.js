import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from "../actions";

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);
        /**
         * 本来addTodo组件，不从父容器组件state获得prop
         * 没有自身的状态state
         * 现在让它保存自身状态，即输入值
         * 这个值随时可能改变，在未存入数据库之前，不需要redux来管理
         * 可以由组件自身控制
         */
        this.state = {
            value: ''
        };
    }

    onInputChange = (ev) => {
        this.setState({
           value: ev.target.value
        });
    }

    /**
     * 文件中的AddTodo组件是一个内部组件，
     * 按说应该是一个傻瓜组件，
     * 但是和我们之前例子中的傻瓜组件不一样，
     * AddTodo不是一个只有一个render函数的组件，
     * AddTodo甚至有一个逻辑比较复杂的onSubmit函数，
     * 为什么不把这部分逻辑提取到外面的容器组件中呢？
     *
     * 其实我们可以把onSubmit的逻辑提取到mapDispatchToProps中。
     * 但是，让AddTodo组件外面的mapDispatchToProps访问到AddTodo组件里面的ref很困难，得不偿失。
     *
     * 使用ref实际上就是直接触及了DOM元素，
     * 与我们想远离DOM是非之地的想法相悖，
     * 虽然React提供了这个功能，
     * 但是还是要谨慎使用，
     * 如果要用，我们也尽量让ref不要跨越组件的边界。
     * 所以，我们把通过ref访问input.value放在内部的AddTodo中，
     * 但是把调用dispatch派发action对象的逻辑放在mapDispatchToProps中，
     * 两者一个主内一个主外，各司其职，不要混淆。
     程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1737-1744). 机械工业出版社. Kindle 版本.
     * @param evt
     */
    onSubmit = (evt) => {
        /**
         * 在HTML中，一个form表单被提交的默认行为会引发网页跳转，
         * 在React应用中当然不希望网页跳转发生，
         * 所以我们首先通过调用参数ev的preventDefault函数取消掉浏览器的默认提交行为。
         程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1733-1734). 机械工业出版社. Kindle 版本.
         */
        evt.preventDefault();
        // debugger;
        const input = this.state.value;
        if (!input.trim()) {
            /**
             * 没有输入
             * 不触发添加动作
             */
            return;
        }
        /**
         * 有输入就触发添加动作
         * 派发事件，传出输入文本
         * 动作事件回调函数由props外部传入
         */
        this.props.onAdd(input);
        /**
         * 提交数据后清空输入框
         */
        this.setState({
            value: ''
        });
    }

    render() {
        return (
          <div className="add-todo">
              <form onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    className="new-todo"
                    value={this.state.value}
                    onChange={this.onInputChange}
                    />
                    <button className="add-btn" type="submit">
                        add
                    </button>
              </form>

          </div>
        );
    }

}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
}

/**
 * 对于AddTodo，
 * 没有任何需要从ReduxStore的状态衍生的属性，
 * 所以最后一行的connect函数第一个参数mapStateToProps是null，
 * 只是用了第二个参数mapDispatchToProps。
 程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1746-1747). 机械工业出版社. Kindle 版本.
 */

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 回调函数
         * 输入text文本
         * 派发添加动作
         * @param text
         */
        onAdd: (text) => {
            // debugger;
            dispatch(addTodo(text));
        }
    };
};

/**
 * 在src/todos/views/addTodo.js中
 * 表示AddTodo标示符代表的组件
 * 和src/todos/views/todos.js中
 * AddTodo标示符代表的组件不一样，
 * 后者是前者用reactredux包裹之后的容器组件。
 程墨. 深入浅出React和Redux (实战) (Chinese Edition) (Kindle 位置 1747-1749). 机械工业出版社. Kindle 版本.
 */

export default connect(null, mapDispatchToProps)(AddTodo);