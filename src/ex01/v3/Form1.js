import React from 'react';
import {data} from './data';
import "./style1.css";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            storage: "",
            // searchRes: data,
            searchRes: [],
            resShow: false
        }

    }

    searchClick = (event) => {
        // debugger;
        event.preventDefault();
        let keys = document.getElementById("seachKeys");
        keys.innerHTML = `id: ${this.state.id} name: ${this.state.name} price: ${this.state.price} storage: ${this.state.storage}`;
        this.searchData();

    }

    searchData = () => {
        let resList = data;

        if(this.state.id) {
            resList = data.filter(item => item.prdId == this.state.id);
        }

        const name = this.state.name.trim();
        if(name) {
            resList = resList.filter(item => item.prdName == name);
        }

        if(this.state.price) {
            resList = resList.filter(item => item.prdPrice == this.state.price);
        }

        if(this.state.storage) {
            resList = resList.filter(item => item.storage == this.state.storage);
        }

        this.setState({
            searchRes: resList,
            resShow: true
        });

    }

    clearClick = (event) => {
        event.preventDefault();
        document.getElementById("seachKeys").innerHTML = "";
        this.setState({
            resShow: false
        });
    }

    changeId = (event) => {
        this.setState({
            id: event.target.value.trim()
        });
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    changePrice = (event) => {
        this.setState({
            price: event.target.value.trim()
        });
    }

    changeStorage = (event) => {
        this.setState({
            storage: event.target.value.trim()
        });
    }

    showTable = () => {
        // debugger;
        if(this.state.searchRes.length === 0) {
            return (
               <div>
                   <table>
                       <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>price</th>
                           <th>storage</th>
                       </tr>
                       </thead>
                       <tbody>
                       </tbody>
                   </table>
                   <div id="total">result total: {this.state.searchRes.length}</div>
               </div>
            );
        }

        let res = this.state.searchRes.map(ele => (
                <tr>
                    <td>{ele.prdId}</td>
                    <td>{ele.prdName}</td>
                    <td>{ele.prdPrice}</td>
                    <td>{ele.storage}</td>
                </tr>
            ));

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>storage</th>
                    </tr>
                    </thead>
                    <tbody>
                    {res}
                    </tbody>
                </table>
                <div id="total">result total: {this.state.searchRes.length}</div>
            </div>
        );
    }


    render() {
        return (
            <div>
                <form>
                    <label>id:</label><input type="text" value={this.state.id} onChange={this.changeId} />
                    <label>name:</label><input type="text" value={this.state.name} onChange={this.changeName} />
                    <label>price:</label><input type="text" value={this.state.price} onChange={this.changePrice} />
                    <label>storage:</label><input type="text" value={this.state.storage} onChange={this.changeStorage} />
                    <button onClick={this.searchClick}>search</button>
                    <button onClick={this.clearClick}>clear</button>
                </form>
                <div id="seachKeys"></div>
                { this.state.resShow && this.showTable()}
            </div>
        );
    }


}

