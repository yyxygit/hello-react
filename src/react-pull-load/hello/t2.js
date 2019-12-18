import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPullLoad, {STATS} from 'react-pullload';
/**
 * 引入 node_modules/react-pullload/dist/ReactPullLoad.css
 * 似乎以绝对路径开始引入，就是从project/node_modules 文件夹开始为根目录的
 * 不知道是不是webpack设置的？
 */
import 'react-pullload/dist/ReactPullLoad.css';

/**
 * node_modules/react-pullload/example/App1.jsx
 * after install, study example
 * bundle1.js is demo use document as contianer
 * bundle2.js is demo use ReactPullLoad root DOM as contianer
 * copy from t1.js
 * isBlockContainer={true} 去掉
 * 对比浏览器里，和t1 dom结构没有区别
 */

/**
 * 似乎是初始化后，上拉加载(等于翻页)的次数（数据还有多少页可翻）
 * @type {number}
 */
const loadMoreLimitNum = 2;

const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]

/**
 * STATS list
 属性	值	根节点 className	说明
 init	''		组件初始状态
 pulling	'pulling'	state-pulling	下拉状态
 enough	'pulling enough'	state-pulling.enough	下拉并且已经满足阈值
 refreshing	'refreshing'	state-refreshing	刷新中（加载数据中）
 refreshed	'refreshed'	state-refreshed	完成刷新动作
 reset	'reset'	state-reset	恢复默认状态
 loading	'loading'	state-loading	加载中

 init/reset -> pulling -> enough -> refreshing -> refreshed -> reset

 init/reset -> pulling -> reset

 init/reset -> loading -> reset
 */

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
          hasMore: true,
          data: cData,
          action: STATS.init,
          index: loadMoreLimitNum,
        };
    }

    handleAction = (action) => {
        console.info(action, this.state.action, action === this.state.action);
        //new action must do not equel to old action
        if (action === this.state.action ||
            action === STATS.refreshing &&
            this.state.action === STATS.loading ||
            action === STATS.loading &&
            this.state.action === STATS.refreshing) {
            console.info("It's same action or on loading or on refreshing ",
                action, this.state.action);
            return false;
        }
        /**
         * 开始刷新，加载数据。。。
         */
        if (action === STATS.refreshing) {
            /**
             * mock ajax 3秒后获得数据
             */
            window.setTimeout(() => {
                this.setState({
                    data: cData,
                    hasMore: true,
                    /**
                     * 通知ReactPullLoad组件刷新完成
                     */
                    action: STATS.refreshed,
                    index: loadMoreLimitNum,
                });
                alert('refresh');
            }, 3000);
        } else if (action === STATS.loading) {
            /**
             * 开始请求，加载更多数据
             */
            this.setState({
                /**
                 * 发起请求了，必定是由数据的
                 * 如果返回的数据，标志位，比如剩余页数为0了
                 * 那再设置 hasMore: false
                 */
                hasMore: true
            });
            /**
             * mock ajax 3秒后获得数据
             */
            window.setTimeout(() => {
                /**
                 * mock 用 state 中的 index 来记录剩余能加载的页数
                 * 实际可以后台返回一个字段值
                 */
                if (this.state.index  === 0) {
                    this.setState({
                        // 组件停止加载
                        action: STATS.reset,
                        // 用户上拉，不再触发加载更多事件
                        hasMore: false,
                    });
                } else {
                    // mock 从变量中加载新数据，实际应后台获得
                    this.setState((prevState) => {
                       return {
                            data: [...prevState.data, cData[0], cData[1]],
                            action: STATS.reset,
                           index: prevState.index - 1,
                       };
                    });
                    ;
                }
            }, 3000);
        }

        /**
         * 把handleAction调用时，输入的action动作标志位存储入state？
         * 可以从this.state中的action看出之前调用handleAction的是什么动作？
         */
        //DO NOT modify below code
        this.setState({
            action: action
        })

    }

    /**
     * 模拟手机端下拉触发刷新
     * pulling -> enough -> refreshing
     * 调用 handleAction 时，action应该是refreshing？
     * @param event
     */
    handleRefresh = (event) => {
        this.handleAction(STATS.refreshing);
    }
    /**
     * 模拟手机端上拉触发加载更多
     * init/reset -> 上拉高度触底 -> loading
     * 组件调用 handleAction 时，action应该是loading？
     * @param event
     */
    handleLoadMore = (event) => {
        this.handleAction(STATS.loading);
    }

    render() {
        const {
            data,
            hasMore,
        } = this.state;

        return (
          <div id="container">
              <div>
                  <button onClick={this.handleRefresh}>
                      refresh
                  </button>
                  <button onClick={this.handleLoadMore}>
                      load more
                  </button>
              </div>
              <ReactPullLoad
                ref="reactpullload"
                className="block"
                // isBlockContainer={true}
                action={this.state.action}
                handleAction={this.handleAction}
                hasMore={hasMore}
              >
                  <ul>
                      {
                          data.map((url, index) => {
                              return (
                                  <li key={`image-${index}`}>
                                      <img src={url} alt=""/>
                                  </li>
                              );
                          })
                      }
                  </ul>
              </ReactPullLoad>
          </div>
        );
    }


}

export default HelloWorld;