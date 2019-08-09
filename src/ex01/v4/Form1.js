import React from 'react';
import {data} from './data';
import "./style1.css";

class PopupDelete extends React.Component {

    handleCancelDelClick = (e) => {
        e.preventDefault();
        this.props.onCancelDel();
    }

    handleConfirmDelClick = (e) => {
        e.preventDefault();
        // debugger;
        this.props.onConfirmDel(this.props.delId);
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-content">
                    <p>Do you want to delete item {this.props.delId}?</p>
                    <button onClick={this.handleCancelDelClick}>cancel</button>
                    <button onClick={this.handleConfirmDelClick}>ok</button>
                </div>
            </div>
        );
    }
}

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

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onDeleteClick(this.props.fruit.id);
    }

    render() {
        const fruit = this.props.fruit;
        return (
            <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.storage}</td>
                <td><button onClick={this.handleDeleteClick}>Delete</button></td>
            </tr>
        );
    }
}

class FruitsTable extends React.Component {
    render() {
        let resList = this.props.fruits;

        if(this.props.searchKeys.sId) {
            resList = resList.filter(item =>
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
            <FruitRow
                fruit={ele}
                key={ele.id}
                onDeleteClick = {this.props.onDeleteClick}
            />
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
                        fruits={this.props.tableData}
                        searchKeys = {this.props.searchKeys}
                        handleDelete = {this.props.handleDelete}
                        onDeleteClick = {this.props.onDeleteClick}
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
            searchShow: false,
            tableData: data,
            showPopDel: false,
            deleteId: null
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

    handleDeletePopup = (delId) => {
        this.setState({
            deleteId: delId,
            showPopDel: true
        });
    }

    handleCancelDel = () => {
        this.setState({
            deleteId: "",
            showPopDel: false
        });
    }

    handleConfirmDel = (delId) => {
        this.setState((preState) => {
            const delIndex = preState.tableData.findIndex(ele => {
                return ele.id === delId;
            });
            preState.tableData.splice(delIndex, 1);
            return {
                tableData: preState.tableData,
                deleteId: null,
                showPopDel: false
            };
        });
        console.log("delete item: ", delId);
    }

    render() {
        // debugger;
        return (
            <div>
                <h2>Search 1</h2>
                <SearchBar
                    searchKeys={this.state.searchKeys}
                    onSearchKeyChange={this.handleSearchKeyChange}
                    onSearchClick={this.handleSearch}
                    onClearClick={this.handleClear}
                />
                <SearchResult
                    tableData={this.state.tableData}
                    searchKeys={this.state.searchKeys}
                    searchShow={this.state.searchShow}
                    onDeleteClick={this.handleDeletePopup}
                />
                {this.state.showPopDel && this.state.deleteId && <PopupDelete
                    delId={this.state.deleteId}
                    onCancelDel={this.handleCancelDel}
                    onConfirmDel={this.handleConfirmDel}
                />}
            </div>
        );
    }
}


