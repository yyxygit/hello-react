import React from 'react';
import { Link } from "react-router-dom";
import {data} from './data';

export default class extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // this.products = this.getProductList();

    }


    render() {
        let productList;
        if(data.length > 0) {
            productList = data.map(ele => (
                <li key={`prd-${ele.prdId}`}>
                    <Link to={`/detail/${ele.prdId}`}>{ele.prdName}</Link>
                </li>));
            }
        return (
            <div className="Product-list">
                <ul>
                    {productList}
                </ul>
            </div>
        );
    }
}
