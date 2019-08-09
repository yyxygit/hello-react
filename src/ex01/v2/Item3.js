import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail/3/melon/5/7
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        this.data = this.props.match.params;

    }
    
    componentDidMount() {
    }


    render() {
        // debugger;
        return (
            <div className="Product-detail" id={this.data2.id}>
                <Back history={this.props.history} />
                <div>{`Name: ${this.data2.name}`}</div>
                <div>{`Price: ${this.data2.price}`}</div>
                <div>{`storage: ${this.data2.storage}`}</div>
            </div>
        );
    }


}

