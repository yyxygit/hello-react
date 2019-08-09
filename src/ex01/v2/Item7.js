import React from 'react';
import Back from './back1';

/**
 * url: http://localhost:3000/detail
 */
export default class extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        /**
         * HashRouter 的 location对象没有key & state 属性值
         * 5.0 也没有 query 属性
         */
        this.data = this.props.location.state;
        this.data2 = this.props.location.query;

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

