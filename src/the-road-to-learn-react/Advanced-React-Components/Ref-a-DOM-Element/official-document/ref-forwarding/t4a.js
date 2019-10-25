import React, {Component} from 'react';

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount() {
        const ipt = this.inputElement.current;
        ipt.focus();
    }

    render() {
        return (
            <CustomTextInput inputRef={this.inputElement} />
        );
    }
}

export default Parent;