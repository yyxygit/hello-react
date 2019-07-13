import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        /**
         * 为了在回调中使用 `this`，这个绑定是必不可少的
         * 将对象中的handleChange/handleSubmit方法的作用上下文，绑定为TodoApp对象本身之内
         * 参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
         * 构造函数内的this指对象本身，前提是要先执行super(props);
         * 否则js规则不允许在constructor内使用this
         */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        /**
         * 如果觉得使用 bind 很麻烦，这里有两种方式可以解决。
         * 如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数：
         * handleClick = () => {
            console.log('this is:', this);
              }

            render() {
                return (
                  <button onClick={this.handleClick}>
                    Click me
                  </button>
                );
            }
         此语法确保 `handleClick` 内的 `this` 已被绑定。
         注意: 这是 *实验性* 语法。Create React App 默认启用此语法
         */
    }

    render() {
        /**
         * JSX表达式内不写注释，注释也会被渲染在页面上
         * 出现< > 等html特殊字符，代码会报错
         * JSX表达方式，在html<元素>标签内部引用js变量
         * 需用{} 表明是js变量引用
         */
        /**
         * 事件触发函数，是在DOM元素渲染完后绑定
         * 到时执行绑定事件函数时的上下文环境是windows全局
         * 若不在开始 this.handleChange = this.handleChange.bind(this);
         * 将 handleChange 方法执行的作用域上下文，提前设定为TodoApp对象
         * 可能会报错，找不到handleSubmit 方法 undefined
         * [你必须谨慎对待 JSX 回调函数中的 this，
         * 在 JavaScript 中，class 的方法默认不会绑定 this。
         * 如果你忘记绑定 this.handleClick 并把它传入了 onClick，
         * 当你调用这个函数的时候 this 的值为 undefined。]
         * 此处的 onSubmit={this.handleSubmit} 等同于
         * onSubmit = TodoApp.handleSubmit
         * 但是 直接JSX 写作 <form onSubmit=TodoApp.handleSubmit>
         *     不报错，但是没有触发事件函数
         *  TODO 待学习如何调试 react js in webstorm
         */
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    /**
     * 因为是作为事件处理函数，被绑定到表单元素上
     * 所以被调用触发时，默认DOM会传回一个event对象，作为参数
     * @param e
     */
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        /**
         * 阻止表单提交，默认动作
         */
        e.preventDefault();
        /**
         * 若输入空值，则不更新list
         */
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        /**
         * 获得新的list item后
         * this.state = { items: [], text: '' };
         * 把新list对象，加入 this.state.item数组内
         * 然后清空input输入框中的item值
         */
        /**
         * 若不使用匿名函数
         * 需要用一个局部变量来保存新items列表
         * 比如：
        let newItems = this.state.items;
        newItems = newItems.concat(newItem);
        this.setState({items: newItems, text: ''});
         * 或者写做：
         * this.setState({items: this.state.items.concat(newItem), text: ''});
         */
        /*
        let newItems = this.state.items;
        newItems = newItems.concat(newItem);
        console.log('before setState', this.state.items);
        this.setState({items: newItems, text: ''}); //状态不会马上更新
        console.log('after setState', this.state.items);*/

        /*
        console.log('before setState', this.state.items);
        this.setState({items: this.state.items.concat(newItem), text: ''});
        console.log('after setState', this.state.items);//状态不会马上更新 */

        /**
         * this.setState方法，接受一个以原先state作为参数的匿名函数，返回一个新的state对象
         * 因为setState方法输入的是一个匿名函数，则这个匿名函数被定义时的上下文被传入，形成闭包
         * 所以可以访问this.setState执行时的环境变量，如：newItem 代表state的新状态值
         * state的改变都在this.setState方法内实现
         * 将原有state作为匿名函数的参数输入，将闭包可修改的新state对象，作为匿名函数的返回值返回
         * 等于
         * this.setState(
         *  function(state) {
         *          return {items: state.items.concat(newItem), text: ''};
         *  }
         * );
         */

        /**
         * http://huziketang.mangojuice.top/books/react/lesson10
         * setState 方法由父类 Component 所提供。当我们调用这个函数的时候，
         * React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
         *
         * 注意，当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。
         * 所以，一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数作为参数。
         * 传入一个对象的时候，这个对象表示该组件的新状态。但你只需要传入需要更新的部分就可以了，而不需要传入整个对象。
         *
         * 当你调用 setState 的时候，React.js 并不会马上修改 state。
         * 而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。
         *  setState 的第二种使用方式，可以接受一个函数作为参数。
         *  React.js 会把上一个 setState 的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象
         *  setState 合并
         上面我们进行了三次 setState，但是实际上组件只会重新渲染一次，而不是三次；
         这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 setState 都进行合并以后再重新渲染组件。
         深层的原理并不需要过多纠结，你只需要记住的是：在使用 React.js 的时候，并不需要担心多次进行 setState 会带来性能问题。
         */
        // console.log('before setState', this.state.items);
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
        // console.log('after setState', this.state.items); //状态不会马上更新
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default TodoApp;
