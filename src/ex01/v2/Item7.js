import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        this.data = this.props.location.state;

    }
    
    componentDidMount() {
    }


    render() {
        // debugger;
        return (
            <div className="Product-detail">
                <Back history={this.props.history} />
                <div>{`Name: ${this.data.prdName}`}</div>
                <div>{`Price: ${this.data.prdPrice}`}</div>
                <div>{`storage: ${this.data.storage}`}</div>
            </div>
        );
    }


}

