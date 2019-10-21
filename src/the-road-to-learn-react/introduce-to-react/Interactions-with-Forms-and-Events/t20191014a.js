import React, {Component} from 'react';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

/**
 * 需要传递 searchTerm 到过滤函数并返回一个新函数来根据条件求值，这叫做高阶函数。
 * 该函数接受 searchTerm 并返回另一个函数，
 * 因为所有的 filter 函数都接受一个函数作为它的输入，
 * 返回的函数可以访问列表项目对象，因为它是传给 filter 函数的函数。
 * 此外，返回的函数将会根据函数中定义的条件对列表进行过滤。
 * @param searchTerm 查询字符串
 * @returns {function(*): boolean} 数组filter方法的函数参数
 */
function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

/**
 * 箭头函数简洁版 isSearched 方法
 */
const isSearched2 = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
          list,
            /**
             * 在构造函数中为 searchTerm 定义初始状态，
             * 输入框在开始时应该是空的，因此初始值应该是空字符串
             */
          searchTerm: '',
        };
    }

    onSearchChange = (event) => {
        this.setState({
           searchTerm: event.target.value,
        });
    }

    render() {
        const { list,
                searchTerm,
        } = this.state;
        
        return (
            <div className="App">
                <form>
                    <input
                        type="text"
                        /**
                        * 表单元素比如 <input>, <textarea> 和 <select> 会以原生 HTML 的形式保存他自己的状态。
                        * 一旦有人从外部做了一些修改，它们就会修改内部的值，
                        * 在 React 中这被称为不受控组件，因为它们自己处理状态。
                        * 在 React 中，你应该确保这些元素变为受控组件。
                        *
                        * 现在输入框的单项数据流循环是自包含的，组件内部状态是输入框的唯一数据来源。
                        */
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                </form>
                {list.filter(isSearched2(searchTerm)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button
                                onClick={() => this.onDismiss(item.objectID)}
                            >
                                Dismiss
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}
