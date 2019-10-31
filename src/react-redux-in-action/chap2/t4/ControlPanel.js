import React, {Component} from 'react';
import Counter from "./Counter";

const style = {
    margin: '20px',
};

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        // 统一设置count初始值
        this.initValues = [0, 10, 20];
        // 初始化组件时，计算出sum初始值
        const initSum = this.initValues.reduce((a,b) => a + b, 0);
        this.state = {
            sum: initSum,
        };
    }

    /**
     * 更新 sum 总和
     * 比较前后值的变化
     * @param previousValue
     * @param newValue
     */
    onCounterUpdate = (previousValue, newValue) => {
        const valueChanged = newValue - previousValue;
        this.setState({
            sum: this.state.sum + valueChanged,
        });
    }

    render() {
        console.log('enter ControlPanel render');

        return (
            <div style={style}>
                <Counter
                    caption="First"
                    onUpdate={this.onCounterUpdate}
                />
                <Counter
                    caption="Second"
                    initValue={this.initValues[1]}
                    onUpdate={this.onCounterUpdate}
                />
                <Counter
                    caption="Third"
                    initValue={this.initValues[2]}
                    onUpdate={this.onCounterUpdate}
                />
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
                <hr />
                <div>Total count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;