import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        /**
         * Timer 是 React.Componet 类对象的实例对象，或说子类实现（语法糖，原型链实现继承）
         * 其构造器函数，原型调用的是React.Component类对象的构造器函数
         * 参考：https://overreacted.io/zh-hans/why-do-we-write-super-props/
         * 为什么我们要写 super(props) ？
         * 在 JavaScript 中，super 指的是父类（即超类）的构造函数。
         * （在我们的例子中，它指向了 React.Component 的实现。）
         * 所以，先要执行父类的构造函数，来实例化Timer对象
         * JavaScript 强制你在使用 this 之前先行调用 super。
         * 优先初始化父类对象中实现的属性和方法，确保子类实例继承到这些，可以用this.xx来调用到
         * 另一个问题: 为什么要传入 props ？
         * 详见如上网页
         * 【类似Java，父类的子类继承，实例构造参数，当然是一起传入父类构造器，确保先实现父类功能。
         * 然后按需求再扩展子类具体功能】
         */
        super(props);
        /**
         * state Timer对象的属性变量
         * react在构造器函数中设置state初始化赋值
         * 当作私有属性来用，构造函数外部，只读
         * 其他修改全部用setState()方法赋值
         * 构造函数 或 其他对象内部定义的函数，其内部使用的this
         * 指向Timer对象自身
         * @type {{seconds: number}}
         */
        this.state = {
            seconds: 0
        };
    }

    tick() {
        /**
         * react组件
         * 通过setState()来改变状态，改变state属性内存储的变量值
         * 执行setState后，reactDOM会调用方法立即刷新页面组件，来实现状态变化
         * 重新渲染与状态变量相关联的DOM组件
         */
        this.setState(
            state => ({
                seconds: state.seconds + 1
            })
        )
    }

    /**
     * 从 React.Component 原型定义上继承来的方法
     */
    componentDidMount() {
        /**
         * this.interval
         * 定义了一个对象内的变量，存放setInterval返回的一个数值，索引这个计时器，可以用它来终止setInterval不断重复执行
         * setInterval 每间隔1000ms，调用执行一次tick函数
         * 因为这个定时重复，是在组件渲染完成后设置的，不会马上在Timer对象定义class里就开始执行
         * componentDidMount 是组件挂载后执行的函数
         * 以后调用componentDidMount函数才会开始setInterval定时调用tick的动作
         * 从外部调用时，上下文环境可能是Timer/React.Component的外部环境，比如windows全局环境
         * tick方法是Timer对象内部定义的方法，外部作用域上下文this指向非Timer对象，为了绑定this调用tick方法的上下文
         * 使用匿名函数 ES6 => 等同于 setInterval(function() {this.tick()}, 1000);
         * 来将this对象的上下文环境，作用域，即this指向Timer对象，绑定传入setInterval执行的方法内
         * 否则如果this指向外部环境上下文对象，会报错，tick()方法undefined
         * @type {number}
         */
        this.interval = setInterval(() => this.tick(), 1000);
        /**
         * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
         * 参见todo-app.js中的事件函数绑定
         * 在组件对象内，可以用bind(this)，代替匿名函数的使用，来设定回调函数，执行时的上下文，对象内作用域
         * 因为bind(this)这个动作是立即调用bind函数执行的，它返回了一个新函数，输入当前this对象作为上下文环境
         */
        // this.interval = setInterval(this.tick.bind(this), 1000);
    }


    render() {
        return (
            <h1>
                Seconds: {this.state.seconds}
            </h1>
        );
    }
}

export default Timer;