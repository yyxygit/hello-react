import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail#{%22prdId%22:%221%22,%22prdName%22:%22apple%22,%22prdPrice%22:2,%22storage%22:0}
 *
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        // this.props.location.hash
        // "#{%22prdId%22:%221%22,%22prdName%22:%22apple%22,%22prdPrice%22:2,%22storage%22:0}"
        this.params = decodeURI(props.location.hash);
        this.hash =  JSON.parse(this.params.slice(1));
        this.nativeLocation = window.location;

    }
    
    componentDidMount() {
    }


    render() {
        // debugger;
        return (
            <div className="Product-detail" id={this.hash.id}>
                <Back history={this.props.history} />
                <div>{`Name: ${this.hash.prdName}`}</div>
                <div>{`Price: ${this.hash.prdPrice}`}</div>
                <div>{`storage: ${this.hash.storage}`}</div>
            </div>
        );
    }


}

