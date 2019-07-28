import React from 'react';
import Back from './back1';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // mock list data
        this.state = {
            id: this.props.match.params.id,
            data: [
                {prdId: '1', prdName: 'apple', prdPrice: 2},
                {prdId: '2', prdName: 'orange', prdPrice: 2},
                {prdId: '3', prdName: 'melon', prdPrice: 5},
                {prdId: '4', prdName: 'strawberry', prdPrice: 10}
            ]
        };

        this.state.product = this.getProductDetail();
    }

    getProductDetail() {
        return this.state.data.filter(item => item.prdId === this.state.id)[0];
    }

    render() {
        return (
            <div className="Product-detail">
                <Back history={this.props.history} />
                <div>{`Name: ${this.state.product.prdName}`}</div>
                <div>{`Price: ${this.state.product.prdPrice}`}</div>
            </div>
        );
    }


}

