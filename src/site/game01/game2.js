import React from 'react';
import "./game.css";

// class Square extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         };
//     }
//
//     handleClick = (e) => {
//         // console.log('click!');
//         // this.setState({
//         //     value: 'X'
//         // });
//         e.preventDefault();
//         this.props.onClick(e.target.name);
//     }
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 name={this.props.index}
//                 onClick={this.handleClick}
//                 // onClick={this.props.onClick}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

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

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
    }

    handleClick = (e) => {
        // debugger;
        e.preventDefault();
        const i = e.target.name;
        const squares = this.state.squares.slice();
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
            squares,
            xIsNext: !xIsNext,
        });
    }

    renderSquare(i) {
        return <Square
            index={i}
            value={this.state.squares[i]}
            onClick={this.handleClick}
        />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
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
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}