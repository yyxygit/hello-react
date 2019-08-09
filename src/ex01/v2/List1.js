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
            /**
             * Link方法
             <Link to="/user/sam">用户</Link>
             push方法
             this.props.history.push("/user/sam");
             * @type {Uint8Array | BigInt64Array | *[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}
             */
            productList = data.map((ele) => {
                const item = JSON.stringify(ele);
                return (
                    <li key={`prd-${ele.prdId}`}>
                        <Link to={`/detail/${item}`}>{ele.prdName}</Link>
                    </li>
                );
            });
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
