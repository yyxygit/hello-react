import React, {Component} from "react";


class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    onClickButton = (e) => {
        this.setState({
           count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <button
                        onClick={this.onClickButton}
                    >Click Me</button>
                </div>
                <div>Click Count: {this.state.count}</div>
            </div>
        );
    }
}

export default ClickCounter;