import React from 'react';
import { Link } from "react-router-dom";
import {data} from './data';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: ''
        }
    }

    componentDidMount() {
        // this.products = this.getProductList();
        const products = this.getProductList();
        this.setState({
            products
        })

    }

    getProductList() {
        let productList;
        if(data.length > 0) {
            productList = data.map(ele => (<li key={`prd-${ele.prdId}`}>
                <Link to={`/detail/${ele.prdId}`}>{ele.prdName}</Link>
            </li>));
        }

        return (
          <ul>
              {productList}
          </ul>
        );
    }

    render() {
        return (
            <div className="Product-list">
                {this.state.products}
            </div>
        );
    }
}
