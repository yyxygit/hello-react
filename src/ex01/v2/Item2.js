import React from 'react';
import Back from './back1';


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
                <div>{`Name: ${this.data.prdName}`}</div>
                <div>{`Price: ${this.data.prdPrice}`}</div>
                <div>{`storage: ${this.data.storage}`}</div>
            </div>
        );
    }


}

