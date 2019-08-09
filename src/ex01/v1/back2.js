import React from 'react';
// import { history } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     btnText: this.props.text ? this.props.text : 'Back'
        // }
        this.text = this.props.text ? this.props.text : 'Back';
    }

    handleClick = () => {
        // debugger;
        this.props.history.goBack();
    }

          //  <button onClick={this.handleClick}>{this.props.text ? this.props.text : 'Back'}</button>
    render() {
        // console.log('1');
        return (
            <button onClick={this.handleClick}>{this.text}</button>
        );
    }

}
