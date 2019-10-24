import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import '../../css/index.css';
import '../../css/App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '5';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_BASE_error = 'https://hn.foo.bar.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}&${PARAM_HPP}${DEFAULT_HPP}`;
// console.log('url:', url);
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
const Search = ({ value, onChange, children, onSubmit }) =>
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

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const Button = ({ onClick, className, children, type = 'button' }) =>
    <button
        onClick={onClick}
        className={className}
        type={type}
    >
        {children}
    </button>;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    className: '',
};


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

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
            author: PropTypes.string,
            url: PropTypes.string,
            num_comments: PropTypes.number,
            points: PropTypes.number,
        })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired,
};

class App extends Component {
    constructor(props) {
        super(props);
        /**
         * 为了实现在客户端对搜索结果的缓存，你必须在你的内部组件的状态中存储多个结果
         （results）而不是一个结果（result）。这些结果对象将会与搜索词映射成一个键值对。而
         每一个从 API 得到的结果会以搜索词为键（key）保存下来。
         results: {
            redux: {
            hits: [ ... ],
            page: 2,
            },
            react: {
            hits: [ ... ],
            page: 1,
            },
            ...
        }
         * searchKey 的值必须在发起请求之前设置。它的值来自 searchTerm。你可能会想：为什么我
         们不直接使用 searchTerm 呢？这是在我们继续之前需要理解的重点。searchTerm 是一个动
         态的变量，因此它随输入的关键字变化而变化。然而，这里你需要的是一个稳定的变量。
         它保存最近一次提交给 API 的搜索词，也可以用它来检索结果集中的某个结果。由于它指
         向缓存中的当前返回结果，因此还可以在 render() 方法中用来显示当前结果。
         * @type {{searchTerm: string, searchKey: string, results: null}}
         */
        this.state = {
            /**
             * 缓存对象
             * 以searchKey为属性名，检索缓存的内容记录
             * 属性值为对象，
             * {
                hits: [ ... ],
                page: 2,
                }
             * page 当前searchKey对于查找页数
             * hits 当前searchKey & page 对应记录数组
             */
            results: null,
            /**
             * String  保存每次提交的查询关键字 searchTerm
             * 在 fetchSearchTopStories 和 onSearchSubmit 方法调用 Ajax 请求数据时，生成
             */
            searchKey: '',
            searchTerm: DEFAULT_QUERY,
            error: null,
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    onDismiss = (id) => {
        //debugger
        const { searchKey, results } = this.state
        const { hits, page } = results;
        const isNotId = item => item.objectID !== id;
        const updateHits = hits.filter(isNotId);
        // 需要最后使用类方法setState() 来更新组件 satate 中的列表了
        const updatedHits = {hits};
        const updatedResult = Object.assign({}, this.state.result, updatedHits);
        this.setState({
            results: {
                ...results,
                [searchKey]: {hits: updatedHits, page}
            }
        });

    }

    /**
     * 更新table查询数据显示
     * 只有 fetchSearchTopStories 方法 会调用
     * @param result Ajax返回json对象
     *  发生场景 等同 fetchSearchTopStories ：
     * 1. componentDidMount 组件初始化挂载后
     * 2. onSearchSubmit Search查询按钮点击后
     * 3. More button 点击后
     */
    setSearchTopStories = (result) => {
        //debugger
        const { hits, page } = result;
        const { searchKey, results } = this.state;
        /**
         * 因为有缓存，每次查询的关键字和页数，都有存储
         * 所以新发起请求获得的result必定是缓存results里没有的
         * constructor 初始化 result 是 null，所以需判断下
         * 若 results[searchKey] 不等于undefined 或 null，即缓存中存有查询该关键字searchKey的数据保存
         * 保存已有数据，添加新的页数数据，应该是page + 1
         * 若 results[searchKey]不存在，则为全新关键字查询的第一页page=0的结果，用空数组来存放
         */
        const oldHits = results && results[searchKey]
            ? results[searchKey].hits : [];

        /**
         * 在前一页10条记录下，增加出现新的10条记录
         * @type {*[]}
         */
        const updatedHits = [...oldHits, ...hits];
        this.setState({
            results: {
                ...results,
                [searchKey]: {
                    hits: updatedHits,
                    page,
                }
            },
        });
        console.log('setSearchTopStories updatedHits num:', updatedHits.length);
    }

    needToSearchTopStories = (searchTerm) => {
        return !this.state.results[searchTerm];
    }

    /**
     * 发起Ajax异步请求远程数据
     * @param searchTerm 查询字符串
     * @param page 查询页号，从0开始
     * 发生场景：
     * 1. componentDidMount 组件初始化挂载后
     * 2. onSearchSubmit Search查询按钮点击后
     * 3. More button 点击后
     */
    fetchSearchTopStories = (searchTerm, page = 0) => {
        axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
        // fetch(`${PATH_BASE_error}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(result => {
                // debugger;
                return this.setSearchTopStories(result.data);
            })
            .catch(e => this.setState({error: e}));
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.setState({
            searchKey: searchTerm,
        });
        this.fetchSearchTopStories(searchTerm);
    }

    onSearchSubmit = (event) => {
        //debugger
        const { searchTerm } = this.state;
        this.setState({
           searchKey: searchTerm,
        });
        if(this.needToSearchTopStories(searchTerm)) {
            this.fetchSearchTopStories(searchTerm);
        }
        event.preventDefault();
    };


    render() {
        const {
            searchTerm,
            results,
            searchKey,
            error,
        } = this.state;

        const page = (results && results[searchKey]) ?
            results[searchKey].page : 0;

        const list = (results && results[searchKey]) ?
            results[searchKey].hits : [];

        //debugger
        return (
          <div className="page">
              <div className="interactions">
                  <Search
                      value={searchTerm}
                      onChange={this.onSearchChange}
                      onSubmit={this.onSearchSubmit}
                      children="Search"
                  />
              </div>
              {error ?
                  <div className="interactions">
                      <p>Something went wrong.</p>
                  </div> :
                  <div>
                      <Table
                          list={list}
                          pattern={searchTerm}
                          onDismiss={this.onDismiss}
                      ></Table>
                      <div className="interactions">
                          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
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

export {
  Button,
    Search,
    Table,
};
