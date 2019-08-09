import React from 'react';
import { Link } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);

        // mock list data
        this.state = {
            data: [
              {prdId: '1', prdName: 'apple', prdPrice: 2,storage: 0},
              {prdId: '2', prdName: 'orange', prdPrice: 2},
              {prdId: '3', prdName: 'melon', prdPrice: 5},
              {prdId: '4', prdName: 'strawberry', prdPrice: 10}
            ],
            productList: ''
        };

        this.state.products = this.getProductList();
    }

    getProductList() {
        let {data, productList} = this.state;
        if(data.length > 0) {
            // data.forEach((ele) => {
            //     productList.push(
            //         <li id={"prd-" + ele.prdId}>
            //             {/*<Link to={"/detail/" + ele.prdId}>{ele.prdName}</Link>*/}
            //             <Link to={`/detail/${ele.prdId}`}>{ele.prdName}</Link>
            //         </li>
            //     );
            // });
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
