import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail/%7B%22prdId%22:%221%22,%22prdName%22:%22apple%22,%22prdPrice%22:2,%22storage%22:0%7D
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        this.data = JSON.parse(this.props.match.params.item);

    }
    
    componentDidMount() {
    }


    render() {
        // debugger;
        return (
            <div className="Product-detail">
                <Back history={this.props.history} />
                <div>{`Name: ${this.data2.prdName}`}</div>
                <div>{`Price: ${this.data2.prdPrice}`}</div>
                <div>{`storage: ${this.data2.storage}`}</div>
            </div>
        );
    }


}

