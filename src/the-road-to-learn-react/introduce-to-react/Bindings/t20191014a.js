import React, {Component} from 'react';

export default class extends Component {
    onClickMe() {
        // onClickMe undefined
        console.log('onClickMe', this);
    }

    render() {
        return (
          <button
            onClick={this.onClickMe}
            type="button"
          >
              Click Me
          </button>
        );
    }
}
