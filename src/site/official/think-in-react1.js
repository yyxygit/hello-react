import React from 'react';



class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
          <tr>
              <th colSpan="2">{category}</th>
          </tr>
        );
    }

}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>{product.name}</span>;

        return (
          <tr>
              <td>{name}</td>
              <td>{product.price}</td>
          </tr>
        );
    }

}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        /**
         * null 没有这个值，初始值：无
         * 不等于 ‘’ 空字符串，不是undefined（也是一个值）
         * 不是任何值，就是不存在
         * @type {null}
         */
        let lastCategory = null;

        this.props.products.forEach(product => {
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
          <form>
              <input type="text" placeholder="Search..." />
              <p>
                  <input type="checkbox" />
                  Only show products in stock
              </p>
          </form>
        );
    }
}

export default class extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}




