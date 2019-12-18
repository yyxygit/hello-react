import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';
import classNames from 'classnames';

// import '../../css/index.css';
// import '../../css/App.css';

const DEFAULT_QUERY = 'redux-basic';
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


const Table0 = ({
   list,
   onDismiss,
   sortKey,
   onSort,
   isSortReverse,
}) => {
    /**
     * 同时排序保存顺序&反序列表
     * 根据isSortReverse是否反向排序字段，来选取显示的序列
     */
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse()
        : sortedList;

    return (
        <div className="table">
            <div className="table-header">
            <span style={{ width: '50%' }}>
                <Sort
                    sortKey={'TITLE'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                    Title
                </Sort>
            </span>
                <span style={{ width: '20%' }}>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                    Author
                </Sort>
            </span>
                <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                    Comments
                </Sort>
            </span>
                <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'POINTS'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                    Points
                </Sort>
            </span>
                <span style={{ width: '20%' }}>
                Archive
            </span>
            </div>
            {
                reverseSortedList.map(item =>
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
        </div>
    );
};

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortKey: 'NONE',
            /**
             * 接下来的目标是实现反向排序。
             * 如果点击 Sort 组件两次，该列表应该被反向排序。
             * 首先，我们需要用一个布尔值来定义反向状态 (isSortReverse)。
             * 排序可以反向或不反向。
             * isSortRevers = false, 不反向 true 反向排序
             */
            isSortReverse: false,
        };
    }

    /**
     * 触发的更新表格排序动作
     * @param sortKey
     */
    onSort = (sortKey) => {
        /**
         * 现在在排序方法中，可以评判列表是否被反向排序。
         * 如果状态中的 sortKey 与传入的 sortKey相同，
         * 并且反向状态 (isSortReverse) 尚未设置为 true，
         * 则相反——反向状态 (isSortReverse) 设置为 true。
         * 反之，已经反向排序时，相同关键字（按钮点击）设为false，即不反向排序
         */
        const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;

        this.setState({
            sortKey,
            isSortReverse,
        });
    }

    render() {
        const {
            list,
            onDismiss,
        } = this.props;

        const {
            sortKey,
            isSortReverse,
        } = this.state;

        /**
         * 同时排序保存顺序&反序列表
         * 根据isSortReverse是否反向排序字段，来选取显示的序列
         */
        const sortedList = SORTS[sortKey](list);
        const reverseSortedList = isSortReverse ? sortedList.reverse()
            : sortedList;

        return (
            <div className="table">
                <div className="table-header">
            <span style={{ width: '50%' }}>
                <Sort
                    sortKey={'TITLE'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                >
                    Title
                </Sort>
            </span>
                    <span style={{ width: '20%' }}>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                >
                    Author
                </Sort>
            </span>
                    <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                >
                    Comments
                </Sort>
            </span>
                    <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'POINTS'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                >
                    Points
                </Sort>
            </span>
                    <span style={{ width: '20%' }}>
                Archive
            </span>
                </div>
                {
                    reverseSortedList.map(item =>
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
            </div>
        );
    }
}

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

const Loading = () =>
    <div>Loading..</div>

function withFoo(Component) {
    return function (props) {
        return <Component {...props} />;
    }
}

/**
 * withFoo1 是 withFoo 的箭头函数表示，函数表达式
 * 输入 Component 组件对象，输出一个匿名函数
 * 该函数调用时，根据props调用参数，返回Component组件对象
 * @param Component
 * @returns {function(*): *} 返回一个函数引用
 */
const withFoo1 = Component => props => <Component {...props} />;

const withLoading = Component => props =>
    props.isLoading ? <Loading />
    : <Component {...props} />;

/**
 * 输入的组件可能不关心 isLoading 属性
 * 可以使用 ES6 中的 rest 解构来避免它
 * 这段代码从 props 对象中取出一个属性，并保留剩下的属性
 * 解构赋值 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * @param Component
 * @returns {function({isLoading: *, [p: string]: *}): *}
 */
const withLoading2 = Component => ({isLoading, ...rest}) =>
    isLoading ? <Loading />
    : <Component {...rest} />;

/**
 * Loading 组件已经封装在 HOC 中，缺失了输入组件。
 * 在显示 Button 组件或 Loading 组件的用例中，
 * Button 是 HOC 的输入组件。增强的输出组件是一个 ButtonWithLoading 的组件。
 * @type {function({isLoading: *, [p: string]: *}): *}
 */
const ButtonWithLoading = withLoading2(Button);

/**
 * Table 组件中有好几列，分别是标题，作者，评论和评分。
 * 你可以定义排序函数，而每个函数接受一个列表并返回按照指定属性排序过的列表。
 * 此外，我们还需要一个默认的排序函数，该函数不做排序而只是用于返回未排序的列表。
 * 这将作为组件的初始状态。
 *
 * 可以看到有两个排序函数返回一个反向列表。
 * 这是因为当用户首次点击排序的时候，
 * 希望查看评论和评分最高的项目，而不是最低的。
 */
const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};

/**
 * 每个 Sort 组件都有一个指定的 sortKey 和通用的 onSort（）函数。Sort 组件调用 onSort()
 方法去设置指定的 sortKey。
 * @param sortKey 排序键值
 * @param onSort    点击按钮时，调用onSort方法，更新sortKey,进行排序
 * @param children 按钮显示的文字
 * @returns {*} 返回一个Button实例
 * @constructor
 * 如你所见，Sort 组件重用了我们的 Button 组件，
 * 当点击按钮时，每个传入的 sortKey 都会被 onSort（）方法设置。
 * 现在，我们应该能够通过点击列标题来对列表进行排序了。
 */
const Sort = ({
    sortKey,
    onSort,
    children,
    activeSortKey,
}) => {
    // const sortClass = ['button-inline'];
    // if(sortKey === activeSortKey) {
    //     sortClass.push('button-active');
    // }

    const sortClass2 = classNames(
      'button-inline',
        {'button-active': sortKey === activeSortKey}
    );

    return (
      <Button
          onClick={() => onSort(sortKey)}
          // className={sortClass.join(' ')}
          className={sortClass2}
      >
          {children}
      </Button>
    );
};

const updateSearchTopStoriesState = (hits, page) => (preState) => {
    const { searchKey, results } = preState;
    const oldHits = results && results[searchKey]
        ? results[searchKey].hits : [];
    /**
     * 在前一页10条记录下，增加出现新的10条记录
     * @type {*[]}
     */
    const updatedHits = [...oldHits, ...hits];
    console.log('setSearchTopStories updatedHits num:', updatedHits.length);
    return {
        results: {
            ...results,
            [searchKey]: {
                hits: updatedHits,
                page,
            }
        },
        isLoading: false,
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        /**
         * 为了实现在客户端对搜索结果的缓存，你必须在你的内部组件的状态中存储多个结果
         （results）而不是一个结果（result）。这些结果对象将会与搜索词映射成一个键值对。而
         每一个从 API 得到的结果会以搜索词为键（key）保存下来。
         results: {
            redux-basic: {
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
            isLoading: false,
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
        const { hits, page } = results[searchKey];
        const isNotId = item => item.objectID !== id;
        const updateHits = hits.filter(isNotId);
        // 需要最后使用类方法setState() 来更新组件 satate 中的列表了
        this.setState({
            results: {
                ...results,
                [searchKey]: {hits: updateHits, page}
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
        this.setState(updateSearchTopStoriesState(hits, page));


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
        this.setState({
            isLoading: true,
        });

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
            isLoading,
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
                          onDismiss={this.onDismiss}
                      ></Table>
                      <div className="interactions">
                          <ButtonWithLoading
                              isLoading={isLoading}
                              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
                          >
                              More
                          </ButtonWithLoading>
                      </div>
                  </div>
              }
          </div>
        );
        /**
         * ButtonWithLoading 组件使用
         * 它接收加载状态 (isLoading) 作为附加属性。
         * 当 HOC 消费加载属性 (isLoading) 时，再将所有其他 props 传递给 Button 组件。
         */
    }
}

export default App;

export {
  Button,
    Search,
    Table,
};
