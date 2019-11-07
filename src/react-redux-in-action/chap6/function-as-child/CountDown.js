import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startCount,
        };
    }

    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({
                    count: newCount,
                });
            } else {
                window.clearInterval(this.intervalHandle);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalHandle) {
           window.clearInterval(this.intervalHandle);
        }
    }

    render() {
        return this.props.children(this.state.count);
    }

}

CountDown.propTypes = {
    children: PropTypes.func.isRequired,
    startCount: PropTypes.number.isRequired,
}

export default CountDown;