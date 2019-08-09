import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail?id=1&name=apple&price=2&storage=0
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        this.params = this.props.match.params;
        this.search =  new URLSearchParams(this.props.location.search);
        this.location = window.location;
        /**
         * props.location hash/pathname/search 字段 和window.location相同
         * props.location key/state 自有属性
         */
    }
    
    componentDidMount() {
    }


    render() {
        // debugger;
        return (
            <div className="Product-detail" id={this.search.get('id')}>
                <Back history={this.props.history} />
                <div>{`Name: ${this.search.get('name')}`}</div>
                <div>{`Price: ${this.search.get('price')}`}</div>
                <div>{`storage: ${this.search.get('storage')}`}</div>
            </div>
        );
    }


}

