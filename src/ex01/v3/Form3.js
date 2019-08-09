import React from 'react';
import {data} from './data2';
import "./style1.css";

class ResultRowsNumber extends React.Component {
    render() {
        return (
            <div id="total">
                result total: {this.props.totalNum}
            </div>
        );
    }
}

class FruitRow extends React.Component {
    render() {
        const fruit = this.props.fruit;
        return (
            <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.storage}</td>
            </tr>
        );
    }
}

class FruitsTable extends React.Component {
    render() {
        let resList = this.props.fruits;

        if(this.props.searchKeys.sId) {
            resList = data.filter(item =>
                item.id == this.props.searchKeys.sId);
        }

        const name = this.props.searchKeys.sName;
        if(name) {
            // resList = resList.filter(item => item.name == name);
            resList = resList.filter(item =>
                item.name.indexOf(name) !== -1);
        }

        if(this.props.searchKeys.sPrice) {
            resList = resList.filter(item =>
                item.price == this.props.searchKeys.sPrice);
        }

        if(this.props.searchKeys.sStorage) {
            resList = resList.filter(item =>
                item.storage == this.props.searchKeys.sStorage);
        }

        const rows = resList.map(ele => (
            <FruitRow fruit={ele} key={ele.id} />
        ));
        // debugger;
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
                    {rows}
                    </tbody>
                </table>
                <ResultRowsNumber totalNum={rows.length}  />
            </div>
        );
    }
}

class SearchConditions extends React.Component {
    render() {
        return (
            <div id="searchKeys">
                id: {this.props.searchKeys.sId}
                name: {this.props.searchKeys.sName}
                price: {this.props.searchKeys.sPrice}
                storage: {this.props.searchKeys.sStorage}
            </div>
        );
    }
}

class SearchResult extends React.Component {
    render() {
        return this.props.searchShow ?
            (
                <div>
                    <SearchConditions
                        searchKeys = {this.props.searchKeys}
                    />
                    <FruitsTable
                        fruits={data}
                        searchKeys = {this.props.searchKeys}
                    />
                </div>
            ) : null;
    }
}

class SearchBar extends React.Component {

    handleInputChange = (e) => {
        // debugger;
        const key = e.target.name;
        const value = key !== "sName" ?
            e.target.value.trim() : e.target.value;
        this.props.onSearchKeyChange(key, value);
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.onSearchClick();
    }

    handleClearClick = (e) => {
        e.preventDefault();
        this.props.onClearClick();
    }

    render() {
        // debugger;
        return (
            <form>
                <label>id:</label>
                <input
                    type="text"
                    name="sId"
                    value={this.props.searchKeys.sId}
                    onChange={this.handleInputChange}
                />
                <label>name:</label>
                <input
                    type="text"
                    name="sName"
                    value={this.props.searchKeys.sName}
                    onChange={this.handleInputChange}
                />
                <label>price:</label>
                <input
                    type="text"
                    name="sPrice"
                    value={this.props.searchKeys.sPrice}
                    onChange={this.handleInputChange}
                />
                <label>storage:</label>
                <input
                    type="text"
                    name="sStorage"
                    value={this.props.searchKeys.sStorage}
                    onChange={this.handleInputChange}
                />
                <button
                    onClick={this.handleSearchClick}
                >
                    search
                </button>
                <button
                    onClick={this.handleClearClick}
                >
                    clear
                </button>
            </form>
        );
    }
}

export default  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeys: {
                sId: "",
                sName: "",
                sPrice: "",
                sStorage: ""
            },
            searchShow: false
        };
    }

    handleSearchKeyChange = (key, value) => {
        this.setState((preState) => {
            return {
                searchKeys : {...preState.searchKeys, [key]:value}
            };
        });
        // this.setState({
        //    searchKeys: {...this.props.searchKeys, [key]:value}
        // });
    }

    handleSearch = () => {
        this.setState({
            searchShow: true
        });
    }

    handleClear = () => {
        this.setState({
            searchKeys: {
                sId: "",
                sName: "",
                sPrice: "",
                sStorage: ""
            },
            searchShow: false
        });
    }


    render() {
        debugger;
        return (
          <div>
              <SearchBar
                  searchKeys = {this.state.searchKeys}
                  onSearchKeyChange = {this.handleSearchKeyChange}
                  onSearchClick = {this.handleSearch}
                  onClearClick = {this.handleClear}
              />
            <SearchResult
                searchKeys = {this.state.searchKeys}
                searchShow={this.state.searchShow}
            />
          </div>
        );
    }
}


