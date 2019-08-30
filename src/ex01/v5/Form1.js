import React from 'react';
import {data} from './data';
import "./style1.css";

class PopupEdit extends React.Component {
    constructor(props) {
        super(props);
        this.editItemProp = JSON.parse(JSON.stringify(this.props.editItem));
        this.state = {
            // editKeys: {
            //     id: this.props.editItem.id,
            //     name: this.props.editItem.name,
            //     price: this.props.editItem.price,
            //     storage: this.props.editItem.storage
            // }
            editKeys: this.editItemProp
        };
    }

    handleEditInputChange = (e) => {
        e.preventDefault();
        // debugger;
        const key = e.target.name;
        const value = key !== "name" ?
            e.target.value.trim() : e.target.value;
        this.setState((preState) => {
            return {
                editKeys: {...preState.editKeys, [key]:value}
            };
        });
    }

    handleCancelEditClick = (e) => {
        e.preventDefault();
        this.props.onCancelEdit();
    }

    handleResetEditClick = (e) => {
        e.preventDefault();
        this.setState({
            // editKeys: {
            //     id: this.props.editItem.id,
            //     name: this.props.editItem.name,
            //     price: this.props.editItem.price,
            //     storage: this.props.editItem.storage
            // }
            editKeys: this.editItemProp
        });
    }

    handleConfirmEditClick = (e) => {
        e.preventDefault();
        const noChange = Object.keys(this.props.editItem).every((key) => {
            return this.props.editItem[key] == this.state.editKeys[key];
        });
        noChange ? this.props.onCancelEdit() : this.props.onConfirmEdit(this.state.editKeys);
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
                            value={this.state.editKeys.name}
                            onChange={this.handleEditInputChange}
                        />
                        <label>price:</label>
                        <input
                            type="text"
                            name="price"
                            value={this.state.editKeys.price}
                            onChange={this.handleEditInputChange}
                        />
                        <label>storage:</label>
                        <input
                            type="text"
                            name="storage"
                            value={this.state.editKeys.storage}
                            onChange={this.handleEditInputChange}
                        />
                        <p>
                            <button onClick={this.handleCancelEditClick}>cancel</button>
                            <button onClick={this.handleResetEditClick}>reset</button>
                            <button onClick={this.handleConfirmEditClick}>ok</button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

class PopupAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addKeys: {
                name: "",
                price: "",
                storage: ""
            }
        };
    }

    handleAddInputChange = (e) => {
        e.preventDefault();
        // debugger;
        const key = e.target.name;
        const value = key !== "name" ?
            e.target.value.trim() : e.target.value;
        this.setState((preState) => {
            return {
              addKeys: {...preState.addKeys, [key]:value}
            };
        });
    }

    handleCancelAddClick = (e) => {
        e.preventDefault();
        this.props.onCancelAdd();
    }

    handleConfirmAddClick = (e) => {
        e.preventDefault();
        const isEmpty = Object.keys(this.state.addKeys).every((key) => {
           return this.state.addKeys[key] == "";
        });
        isEmpty ? this.props.onCancelAdd() : this.props.onConfirmAdd(this.state.addKeys);
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
                            value={this.state.addKeys.name}
                            onChange={this.handleAddInputChange}
                        />
                        <label>price:</label>
                        <input
                            type="text"
                            name="price"
                            value={this.state.addKeys.price}
                            onChange={this.handleAddInputChange}
                        />
                        <label>storage:</label>
                        <input
                            type="text"
                            name="storage"
                            value={this.state.addKeys.storage}
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
        this.props.onConfirmDel();
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

// 展示组件
function ResultRowsNumber(props) {
    return (
        <div id="total">
            result total: {props.totalNum}
        </div>
    );
}

class FruitRow extends React.Component {

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onDeleteClick(this.props.fruit.id);
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.props.onEditClick(this.props.fruit.id);
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
                <td><button onClick={this.handleEditClick}>Edit</button></td>
            </tr>
        );
    }
}

function FruitsTable(props) {

    // debugger;
    let resList = props.fruits;

    if(props.searchKeys.id) {
        resList = resList.filter(item =>
            item.id == props.searchKeys.id);
    }

    const name = props.searchKeys.name;
    if(name) {
        resList = resList.filter(item =>
            item.name.indexOf(name) !== -1);
    }

    if(props.searchKeys.price) {
        resList = resList.filter(item =>
            item.price == props.searchKeys.price);
    }

    if(props.searchKeys.storage) {
        resList = resList.filter(item =>
            item.storage == props.searchKeys.storage);
    }

    const rows = resList.map(ele => (
        <FruitRow
            fruit={ele}
            key={ele.id}
            onDeleteClick={props.onDeleteClick}
            onEditClick={props.onEditClick}
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

function SearchConditions(props) {
    return (
        <div id="searchKeys">
            id: {props.searchKeys.id}
            name: {props.searchKeys.name}
            price: {props.searchKeys.price}
            storage: {props.searchKeys.storage}
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
                    fruits={props.tableData}
                    searchKeys={props.searchKeys}
                    onDeleteClick={props.onDeleteClick}
                    onEditClick={props.onEditClick}
                />
            </div>
        ) : null;
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
            showPopEdit: false,
            editItem: null
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

    handleConfirmDel = () => {
        this.setState((preState) => {
            const delIndex = preState.tableData.findIndex(ele => {
                return ele.id == preState.deleteId;
            });
            preState.tableData.splice(delIndex, 1);
            console.log("delete item: ", preState.deleteId);
            return {
                tableData: preState.tableData,
                deleteId: null,
                showPopDel: false
            };
        });
    }

    handleAddPopup = () => {
        this.setState({
            showPopAdd: true
        });
    }

    handleCancelAdd = () => {
        this.setState({
            showPopAdd: false
        });
    }

    handleConfirmAdd = (objAdd) => {
        this.setState((preState) => {
            const addId = preState.tableData[preState.tableData.length - 1].id + 1;
            const addItem = {...objAdd, ['id']:addId};
            preState.tableData.push(addItem);
           return {
               tableData: preState.tableData,
               showPopAdd: false
           };
        });
    }

    handleEditPopup = (editId) => {
        const item = this.state.tableData.find(ele => ele.id == editId);
        this.setState({
            editItem: item,
            showPopEdit: true
        });
    }

    handleCancelEdit = () => {
        this.setState({
            showPopEdit: false
        });
    }

    handleConfirmEdit = (editItem) => {
        this.setState( (preState) => {
            const editIdx = preState.tableData.findIndex(ele => ele.id == editItem.id);
            preState.tableData.splice(editIdx, 1, editItem);
            return {
                tableData:preState.tableData,
                editItem: null,
                showPopEdit: false
            };
        });
    };

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
                    onEditClick={this.handleEditPopup}
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
                {this.state.showPopEdit && <PopupEdit
                    editItem={this.state.editItem}
                    onCancelEdit={this.handleCancelEdit}
                    onConfirmEdit={this.handleConfirmEdit}
                />}
            </div>
        );
    }
}


