import React, {Component} from 'react';

// import '../../css/index.css';
// import '../../css/App.css';


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


function Search(props) {
    const { value,
        onChange,
    } = props;

    return(
        <form>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

/**
 * 最佳实践就是在函数签名中通过解构 props 来使用它
 * @param value
 * @param onChange
 * @param children
 * @returns {*}
 * @constructor
 */
function Search1({ value, onChange, children }) {
    return(
        <form>
            {children} <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

/**
 * ES6 箭头函数允许让你保持你的函数简洁。你可以
 移除函数的块声明（译者注：即花括号 {}）。在简化的函数体中，表达式会自动作为返回
 值，因此你可以将 return 语句移除。
 ES6 箭头函数允许让你保持你的函数简洁。你可以
 移除函数的块声明（译者注：即花括号 {}）。在简化的函数体中，表达式会自动作为返回
 值，因此你可以将 return 语句移除。
 当使用块声明时，人们往往容易在这个函数里面做过多的事情。通过移除块声明，你可以专注在函数
 的输入和输出上。
 * @param value
 * @param onChange
 * @param children
 * @returns {*}
 * @constructor
 */
const Search2 = ({ value, onChange, children }) =>
    <form>
        {children} <input
        type="text"
        value={value}
        onChange={onChange}
    />
    </form>;

const Button = ({ onClick, className = '', children }) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>;

const Table = ({ list, pattern, onDismiss }) =>
    <div className="table">
        {list.filter(isSearched2(pattern)).map(item =>
            <div key={item.objectID} className="table-row">
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                    >
                        Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>;

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list,
            searchTerm: '',
        };
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    onDismiss = (id) => {
        const updateList = this.state.list.filter(item => item.objectID !== id);
        // 需要最后使用类方法setState() 来更新组件 satate 中的列表了
        this.setState({
            list: updateList
        });
    }

    render() {
        // alert('a');
        const {
            list,
            searchTerm,
        } = this.state;
        // debugger;

        return (
            <div className="page">
                <div className="interactions">
                    <Search2
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                </div>
                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }

}


