import React from 'react';
import "./game.css";


function Square(props) {
    return (
      <button
        name={props.index}
        className="square"
        onClick={props.onClick}
        >
          {props.value}
      </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square
            index={i}
            value={this.props.squares[i]}
            onClick={this.props.onClick}
        />;
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          history: [
              {
                  squares: Array(9).fill(null),
              }
          ],
            // 下一次点击是否画X，否就画O
          xIsNext: true,
            /**
             * 代表我们当前正在查看哪一项历史记录
             * 类似于history对象数组中的一个指针，指向历史记录每一步的索引值
             */
          stepNumber: 0,
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        const i = e.target.name;
        // debugger;
        /**
         * 每次stepNumber更新后，重新开始下棋，history历史快照也更新
         * 如果不继续下棋，点击不发生，history历史快照不更新，实现可以逐步回顾历史记录的功能
         * 从新的stepNumber索引，之后开始保存新的快照
         */
            // 获得当前快照索引
        const {stepNumber} = this.state;
        // 更新历史记录到当前stepNumber快照
        const history = this.state.history.slice(0, stepNumber + 1);
        // const {history} = this.state;
        const current = history[history.length -1];
        const squares = current.squares.slice();
        /**
         *  squares[i] 防止填过的空格重复填写
         *  calculateWinner(squares) 已经有玩家胜出后，其他空白空格，防止继续被填写
         */
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const {xIsNext} = this.state;
        squares[i] = xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !xIsNext,
            /**
             * 每画一步，快照增加一个，stepNumber 加一
             * history.length == history快照总数 + 1
             */
            stepNumber: history.length,
        });
    }

    jumpTo = (e) => {
        const step = parseInt(e.target.name);
        this.setState({
           stepNumber: step,
            /**
             * 当状态 stepNumber 是偶数时，我们还要把 xIsNext 设为 true
             * 第一步，stepNumber = 0, 设置X先行
             * 第二步，stepNumber = 1, 该画O
             * 第三部，stepNumber = 2, 画X
             * 规律：stepNumber偶数画X，奇数画O
             */
           xIsNext: (step % 2 === 0),
        });
    }

    render() {
        const {history, stepNumber} = this.state;
        /**
         * 本来每次渲染的都是历史快照中的最新快照
         * 现在设定为渲染历史快照中指定步骤快照
         */
        // const current = history[history.length -1];
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        const moves = history.map((step, move) => {
            const description = move ? 'Go to move #' + move :
                                       'Go to game start';
            return (
                /**
                 * 组件的 key 值并不需要在全局都保证唯一，只需要在当前的同一级元素之前保证唯一即可。
                 * 在井字棋的历史记录中，每一个历史步骤都有一个与之对应的唯一 ID：这个 ID 就是每一步棋的序号。
                 * 因为历史步骤不需要重新排序、新增、删除，所以使用步骤的索引作为 key 是安全的。
                 */
                <li key={move}>
                    <button
                        name={move}
                        onClick={this.jumpTo}
                    >
                        {description}
                    </button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}