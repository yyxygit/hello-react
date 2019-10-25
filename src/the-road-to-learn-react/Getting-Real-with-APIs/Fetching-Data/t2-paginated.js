import React, {Component} from 'react';

import '../../css/index.css';
import '../../css/App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const PARAM_PAGE = 'page=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;
console.log('url:', url);
// url: https://hn.algolia.com/api/v1/search?query=redux&page=

const smallColumn = {
    width: '10%',
};

const midColumn = {
    width: '20%',
};

const largeColumn = {
    width: '50%',
};

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
const Search2 = ({ value, onChange, children, onSubmit }) =>
    <form onSubmit={onSubmit}>
        <input
        type="text"
        value={value}
        onChange={onChange}
        />
        <button
            type="submit"
        >
            {children}
        </button>
    </form>;

const Button = ({ onClick, className = '', children, type = 'button' }) =>
    <button
        onClick={onClick}
        className={className}
        type={type}
    >
        {children}
    </button>;


const Table = ({ list, onDismiss }) =>
    <div className="table">
        {list.map(item =>
            <div key={item.objectID} className="table-row">
                            <span  style={largeColumn}>
                                <a href={item.url}>{item.title}</a>
                            </span>
                <span style={midColumn}>{item.author}</span>
                <span style={smallColumn}>{item.num_comments}</span>
                <span style={smallColumn}>{item.points}</span>
                <span style={midColumn}>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                    >
                        Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>;

class App extends Component {
    constructor(props) {
        super(props);
        /**
         * 将一个空的列表结果以及一个默认的搜索词作为初始状态
         * @type {{result: null, searchTerm: string}}
         */
        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY,
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    onDismiss = (id) => {
        //debugger
        const isNotId = item => item.objectID !== id;
        const hits = this.state.result.hits.filter(isNotId);
        // 需要最后使用类方法setState() 来更新组件 satate 中的列表了
        const updatedHits = {hits};
        const updatedResult = Object.assign({}, this.state.result, updatedHits);
        this.setState({
            // result: updatedResult,
            result: {...this.state.result, hits}
        });

    }

    setSearchTopStories = (result) => {
        //debugger
        this.setState({
            result,
        });
    }

    fetchSearchTopStories = (searchTerm, page = 0) => {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(e => e);
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
    }

    onSearchSubmit = (event) => {
        //debugger
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
        event.preventDefault();
    };


    render() {
        const { searchTerm, result } = this.state;
        /**
         * 当结果还没有返回时，你应该保证 render() 方法中的默认分页为 0。记住 render()
         方法是在 componentDidMount() 生命周期方法去异步获取数据之前调用的。
         * @type {*|number}
         */
        const page = result && result.page || 0;
        const page2 = result ? result.page : 0;
        //debugger
        if(!result) {
            return null;
        }
        return (
          <div className="page">
              <div className="interactions">
                  <Search2
                      value={searchTerm}
                      onChange={this.onSearchChange}
                      onSubmit={this.onSearchSubmit}
                      children="Search"
                  />
              </div>
              {result && <div>
                  <Table
                      list={result.hits}

                      onDismiss={this.onDismiss}
                  ></Table>
                  <div className="interactions">
                      <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                          More
                      </Button>
                  </div>
              </div>
              }

          </div>
        );
    }
}

export default App;
