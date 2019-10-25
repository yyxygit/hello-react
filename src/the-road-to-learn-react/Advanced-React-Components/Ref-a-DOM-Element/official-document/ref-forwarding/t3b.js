import React, {Component} from 'react';
// import FancyButton from "./t3a";
import FancyButton from "./t3a2";

class ShowBtn extends Component {
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
    }

    componentDidMount() {
        const btn = this.btnRef.current;
        // btn LogProps实例
        console.log('btn:', btn);
    }

    render() {
        return (
          <FancyButton
            label="Click Me"
            ref={this.btnRef}
          />
        );
    }
}

export default ShowBtn;