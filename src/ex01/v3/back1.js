import React from 'react';
// import { history } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.text ? this.props.text : 'Back';
    }

    handleClick = () => {
        // debugger;
        this.props.history.goBack();
    }

    render() {
        // console.log('1');
        return (
            <button onClick={this.handleClick}>{this.text}</button>
        );
    }

}
