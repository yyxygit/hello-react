import React from 'react';
import Back from './back2';
import {data} from './data';

// const data2 = [
//     {prdId: '1', prdName: 'apple', prdPrice: 2, storage: 0},
//     {prdId: '2', prdName: 'orange', prdPrice: 2, storage: 2},
//     {prdId: '3', prdName: 'melon', prdPrice: 5, storage: 7},
//     {prdId: '4', prdName: 'strawberry', prdPrice: 10, storage: 10}
// ];

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                prdId: '',
                prdName: '',
                prdPrice: '',
                storage: ''
            }
        };

    }
    componentDidMount() {
        // debugger;
        this.setState({
            product: this.getProductDetail()
        })

    }

    getProductDetail() {
        return data.filter((item) => item.prdId === this.props.match.params.id)[0];
    }

    render() {
        // debugger;
        return (
            <div className="Product-detail">
                <Back history={this.props.history} />
                <div>{`Name: ${this.state.product.prdName}`}</div>
                <div>{`Price: ${this.state.product.prdPrice}`}</div>
            </div>
        );
    }


}

