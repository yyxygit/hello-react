import React from 'react';
import {data} from './data';
import "./style1.css";

class PopupAdd extends React.Component {

    handleAddInputChange = (e) => {
        e.preventDefault();
        // debugger;
        const key = e.target.name;
        const value = key !== "name" ?
            e.target.value.trim() : e.target.value;
        this.props.onAddKeyChange(key, value);
    }

    handleCancelAddClick = (e) => {
        e.preventDefault();
        this.props.onCancelAdd();
    }

    handleConfirmAddClick = (e) => {
        e.preventDefault();
        // debugger;
        this.props.onConfirmAdd();
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-content">
                    <form className="addPop">
                        <label>name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.props.addKeys.name}
                            onChange={this.handleAddInputChange}
                        />
                        <label>price:</label>
                        <input
                            type="text"
                            name="price"
                            value={this.props.addKeys.price}
                            onChange={this.handleAddInputChange}
                        />
                        <label>storage:</label>
                        <input
                            type="text"
                            name="storage"
                            value={this.props.addKeys.storage}
                            onChange={this.handleAddInputChange}
                        />
                        <p>
                        <button onClick={this.handleCancelAddClick}>cancel</button>
                        <button onClick={this.handleConfirmAddClick}>ok</button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

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
        // debugger;
        let resList = this.props.fruits;

        if(this.props.searchKeys.id) {
            resList = resList.filter(item =>
                item.id == this.props.searchKeys.id);
        }

        const name = this.props.searchKeys.name;
        if(name) {
            resList = resList.filter(item =>
                item.name.indexOf(name) !== -1);
        }

        if(this.props.searchKeys.price) {
            resList = resList.filter(item =>
                item.price == this.props.searchKeys.price);
        }

        if(this.props.searchKeys.storage) {
            resList = resList.filter(item =>
                item.storage == this.props.searchKeys.storage);
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
                id: {this.props.searchKeys.id}
                name: {this.props.searchKeys.name}
                price: {this.props.searchKeys.price}
                storage: {this.props.searchKeys.storage}
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
        const value = key !== "name" ?
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

    handleAddClick = (e) => {
        e.preventDefault();
        this.props.onAddClick();
    }

    render() {
        // debugger;
        return (
            <form>
                <label>id:</label>
                <input
                    type="text"
                    name="id"
                    value={this.props.searchKeys.id}
                    onChange={this.handleInputChange}
                />
                <label>name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.props.searchKeys.name}
                    onChange={this.handleInputChange}
                />
                <label>price:</label>
                <input
                    type="text"
                    name="price"
                    value={this.props.searchKeys.price}
                    onChange={this.handleInputChange}
                />
                <label>storage:</label>
                <input
                    type="text"
                    name="storage"
                    value={this.props.searchKeys.storage}
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
                <button
                    onClick={this.handleAddClick}
                >
                    add
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
                id: "",
                name: "",
                price : "",
                storage: ""
            },
            searchShow: false,
            tableData: data,
            showPopDel: false,
            deleteId: null,
            showPopAdd: false,
            addKeys: {
                name: "",
                price: "",
                storage: ""
            }
        };
    }

    handleSearchKeyChange = (key, value) => {
        this.setState((preState) => {
            return {
                searchKeys : {...preState.searchKeys, [key]:value}
            };
        });
    }

    handleAddKeyChange = (key, value) => {
        this.setState((preState) => {
            return {
                addKeys : {...preState.addKeys, [key]:value}
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
                id: "",
                name: "",
                price : "",
                storage: ""
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
            deleteId: null,
            showPopDel: false
        });
    }

    handleConfirmDel = (delId) => {
        this.setState((preState) => {
            const delIndex = preState.tableData.findIndex(ele => {
                return ele.id == delId;
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

    handleConfirmDel = () => {
        this.setState((preState) => {
            const delIndex = preState.tableData.findIndex(ele => {
                return ele.id == preState.deleteId;
            });
            preState.tableData.splice(delIndex, 1);
            return {
                tableData: preState.tableData,
                deleteId: null,
                showPopDel: false
            };
        });
        // console.log("delete item: ", delId);
    }

    handleAddPopup = () => {
        this.setState({
            showPopAdd: true
        });
    }

    handleCancelAdd = () => {
        this.setState({
            showPopAdd: false//,
            // addKeys: {
            //     name: "",
            //     price: "",
            //     storage: ""
            // }
        });
    }

    handleConfirmAdd = () => {
        this.setState((preState) => {
            // debugger;
            const addItem = {...preState.addKeys, ['id']:preState.tableData.length + 1};
            preState.tableData.push(addItem);
           return {
               tableData: preState.tableData,
               showPopAdd: false,
               addKeys: {
                   name: "",
                   price: "",
                   storage: ""
               }
           };
        });
    }

    render() {
        // debugger;
        return (
            <div>
                <h2>Search 3</h2>
                <SearchBar
                    searchKeys={this.state.searchKeys}
                    onSearchKeyChange={this.handleSearchKeyChange}
                    onSearchClick={this.handleSearch}
                    onClearClick={this.handleClear}
                    onAddClick={this.handleAddPopup}
                />
                <SearchResult
                    tableData={this.state.tableData}
                    searchKeys={this.state.searchKeys}
                    searchShow={this.state.searchShow}
                    onDeleteClick={this.handleDeletePopup}
                />
                {this.state.showPopDel && <PopupDelete
                    delId={this.state.deleteId}
                    onCancelDel={this.handleCancelDel}
                    onConfirmDel={this.handleConfirmDel}
                />}
                {this.state.showPopAdd && <PopupAdd
                    addKeys={this.state.addKeys}
                    onAddKeyChange={this.handleAddKeyChange}
                    onCancelAdd={this.handleCancelAdd}
                    onConfirmAdd={this.handleConfirmAdd}
                />}
            </div>
        );
    }
}


