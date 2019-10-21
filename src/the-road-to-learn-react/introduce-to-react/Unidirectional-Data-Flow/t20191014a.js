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

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
          list: list,
        };
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
        /**
         * Array.prototype.filter 方法
         * itler 方法以一个函数作为输入。
         * 这个函数可以访问列表中的每一项，因为它会遍历整个列表。
         * 通过这种方式，你可以基于过滤条件来判断列表的每一项。
         * 如果该项判断结果为 true，则该项保留在列表中。否则将从列表中过滤掉。
         * 另外，好的一点是这个方法会返回一个新的列表而不是改变旧列表。它
         * 遵循了 React 中不可变数据的约定。
         * @type {T[]}
         */
        const updateList = this.state.list.filter(function isNotId(item) {
            return item.objectID !== id;
        });
        /**
         * 你可以抽取函数并将其传递给 filter 函数。
         */
        function isNotId1(item) {
            return item.objectID !== id;
        }
        const updateList1 = this.state.list.filter(isNotId);
        /**
         * 可以通过使用 ES6 的箭头函数让代码更简洁
         */
        const isNotId2 = item => item.objectID !== id;
        const updateList2 = this.state.list.fill(isNotId2);
        /**
         * 甚至可以内联到一行内完成，就像在按钮的 onClick 事件处理器做的一样，
         * 但如此会损失一些可读性
         */
        const updateList3 = this.state.list.filter(item => item.objectID !== id);
        // 需要最后使用类方法setState() 来更新组件 satate 中的列表了
        this.setState({
           list: updateList3
        });

    }

    render() {
        const {list} = this.state;
        /**
         * 函数体内只有一条return语句，可以省去{ return }
         */
        return (
            <div className="App">
                {list.map(item =>
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
                                type="button"
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
