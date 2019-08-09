import React from 'react';
import {data} from './data2';
import "./style1.css";

function ResultRowsNumber(props) {
    return (
        <div id="total">
            result total: {props.totalNum}
        </div>
    );
}

function FruitRow(props) {
    const fruit = props.fruit;
    return (
        <tr>
            <td>{fruit.id}</td>
            <td>{fruit.name}</td>
            <td>{fruit.price}</td>
            <td>{fruit.storage}</td>
        </tr>
    );
}

function FruitsTable(props) {
    let resList = props.fruits;

    if(props.searchKeys.sId) {
        resList = resList.filter(item =>
            item.id == props.searchKeys.sId);
    }

    const name = props.searchKeys.sName;
    if(name) {
        // resList = resList.filter(item => item.name == name);
        resList = resList.filter(item =>
            item.name.indexOf(name) !== -1);
    }

    if(props.searchKeys.sPrice) {
        resList = resList.filter(item =>
            item.price == props.searchKeys.sPrice);
    }

    if(props.searchKeys.sStorage) {
        resList = resList.filter(item =>
            item.storage == props.searchKeys.sStorage);
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

function SearchConditions(props) {
        return (
            <div id="searchKeys">
                id: {props.searchKeys.sId}
                name: {props.searchKeys.sName}
                price: {props.searchKeys.sPrice}
                storage: {props.searchKeys.sStorage}
            </div>
        );
}

function SearchResult(props) {

    return props.searchShow ?
        (
            <div>
                <SearchConditions
                    searchKeys = {props.searchKeys}
                />
                <FruitsTable
                    fruits={data}
                    searchKeys = {props.searchKeys}
                />
            </div>
        ) : null;
}

/**
 * 涉及State的都用class继承React.Component类
 * 不涉及State变化，只需要props来渲染的组件，用function(props) {}
 * 组件轻便些
 */
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


