import React, {Component} from 'react';

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

function Parent(props) {
    return (
        <div>
            My input: <CustomTextInput inputRef={props.inputRef} />
        </div>
    );
}

class Grandparent extends React.Component {
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
            <Parent inputRef={this.inputElement} />
        );
    }
}

export default Grandparent;