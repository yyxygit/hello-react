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



class Search extends Component {
    render() {
        const { value,
                onChange,
            children,
        } = this.props;
        // debugger;

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
}

class Table extends Component {
    render() {
        const {
            list,
            pattern,
            onDismiss,
        } = this.props;
        // debugger;

        return (
            list.filter(isSearched2(pattern)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button
                                onClick={() => onDismiss(item.objectID)}
                            >
                                Dismiss
                            </button>
                        </span>
                    </div>
                )
        );
    }
}

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
        const {
            list,
            searchTerm,
        } = this.state;
        // debugger;

        return (
          <div className="App">
              <Search
                  value={searchTerm}
                  onChange={this.onSearchChange}
              >
                  Search
              </Search>
              <Table
                list={list}
                pattern={searchTerm}
                onDismiss={this.onDismiss}
              />
          </div>
        );
    }

}