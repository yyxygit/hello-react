import React from 'react';
import {data} from './data';

import 'antd/es/button/style/css';
import 'antd/es/input/style/css';
import 'antd/es/modal/style/css';
// import {Button} from 'antd';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Modal from 'antd/es/modal';
import "./style1.css";

const {confirm} = Modal;

/**
 * 遍历比较对象属性的各个属性值key-value是否相同
 * @param objName 属性类型为Object的属性名
 * @param thisProps 当前对象
 * @param nextProps 新对象
 * @returns {boolean} 属性值有任一不相等的，返回true，全都相等，返回false
 */
function compareKeys(objAttr, thisObj, newObj) {
    const oThis = thisObj[objAttr],
        oNew = newObj[objAttr];
    for(let key of Object.keys(oThis)) {
        if(oThis[key] != oNew[key]) {
            return true;
        }
    }
    return false;
}

// 显示查询
function ResultRowsNumber(props) {
    console.log(`r ResultRowsNumber ${props.totalNum}`);
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



    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger;
        /**
         * 似乎是
         */
        return compareKeys('fruit', this.props, nextProps);
    }

    render() {
        const {fruit} = this.props;
        console.log('r FruitRow', fruit.id);
        return (
            <tr className="tr-tableRes">
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.storage}</td>
                <td><Button onClick={this.handleDeleteClick}>Delete</Button></td>
                <td><Button onClick={this.handleEditClick}>Edit</Button></td>
            </tr>
        );
    }
}

function FruitsTable(props) {
    console.log('r FruitsTable');
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
    console.log('r SearchConditions');
    return (
        <div id="searchKeys">
            id: {props.searchKeys.id}
            name: {props.searchKeys.name}
            price: {props.searchKeys.price}
            storage: {props.searchKeys.storage}
        </div>
    );
}

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.dataLength = this.props.tableData.length;
        this.editUpdate = this.props.editUpdate;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger;
        if(this.props.searchShow != nextProps.searchShow) {
            return true;
        }
        if(compareKeys('searchKeys', this.props, nextProps)) {
            return true;
        }
        if(this.dataLength != nextProps.tableData.length) {
            this.dataLength = nextProps.tableData.length;
            return true;
        }
        if(this.props.editUpdate != nextProps.editUpdate) {
            this.editUpdate = nextProps.editUpdate;
            return true;
        }
        return false;
    }

    render() {
        const {
            searchShow,
            searchKeys,
            tableData,
            onDeleteClick,
            onEditClick
        } = this.props;

        console.log('r SearchResult', searchShow);

        return searchShow ?
            (
                <div>
                    <SearchConditions
                        searchKeys = {searchKeys}
                    />
                    <FruitsTable
                        fruits={tableData}
                        searchKeys={searchKeys}
                        onDeleteClick={onDeleteClick}
                        onEditClick={onEditClick}
                    />
                </div>
            ) : null;
    }
}

class SearchBar extends React.Component {

    handleInputChange = (e) => {
        const {target} = e;
        // debugger;
        const key = target.name;
        const value = key !== "name" ?
            target.value.trim() : target.value;
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // debugger;
        return compareKeys('searchKeys', this.props, nextProps);
    }

    render() {
        console.log('r SearchBar');
        const {searchKeys} = this.props;
        // debugger;
        return (
            <form className="search-form">
                <label>id:</label>
                <Input
                    type="text"
                    name="id"
                    value={searchKeys.id}
                    onChange={this.handleInputChange}
                />
                <label>name:</label>
                <Input
                    type="text"
                    name="name"
                    value={searchKeys.name}
                    onChange={this.handleInputChange}
                />
                <label>price:</label>
                <Input
                    type="text"
                    name="price"
                    value={searchKeys.price}
                    onChange={this.handleInputChange}
                />
                <label>storage:</label>
                <Input
                    type="text"
                    name="storage"
                    value={searchKeys.storage}
                    onChange={this.handleInputChange}
                />
                <Button
                    type="primary"
                    icon="search"
                    onClick={this.handleSearchClick}
                >
                    search
                </Button>
                <Button
                    onClick={this.handleClearClick}
                >
                    clear
                </Button>
                <Button
                    onClick={this.handleAddClick}
                >
                    add
                </Button>
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
            addKeys: {
                name: "",
                price: "",
                storage: ""
            },
            showPopAdd: false,
            showPopEdit: false,
            editKeys: {
                id: "",
                name: "",
                price: "",
                storage: ""
            },
            editUpdate: false
        };
        this.editUpdate = false;
    }

    handleSearchKeyChange = (key, value) => {
        this.setState((preState) => {
            return {
                searchKeys : {...preState.searchKeys, [key]:value}
            };
        });
    }

    handleAddKeyChange = (e) => {
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
        let _this = this;
        confirm({
            title: 'Delete Item',
            content: `Do you want to delete item ${delId}?`,
            onOk() {
                const delIndex = data.findIndex(ele => ele.id == delId);
                // mock ajax delete item
                data.splice(delIndex, 1);
                console.log("delete item: ", delId);
                _this.setState({
                    tableData: data
                });
            },
            onCancel() {
                console.log(`cancel delete ${delId}`);
            }
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

    handleConfirmAdd = () => {
        // debugger;
        const {addKeys, tableData} = this.state;
        const isEmpty = Object.keys(addKeys).every(key => addKeys[key] == "");
        if(isEmpty) {
            this.handleCancelAdd();
        } else {
            const id = tableData[tableData.length - 1].id + 1;
            const addItem = {...addKeys, id};
            // mock ajax update table data
            data.push(addItem);
            this.setState({
                tableData: data,
                showPopAdd: false
            });
        }
    }

    handleEditPopup = (editId) => {
        const item = this.state.tableData.find(ele => ele.id == editId);
        this.setState({
            editKeys: item,
            showPopEdit: true
        });
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

    handleCancelEdit = () => {
        this.setState({
            showPopEdit: false
        });
    }

    handleConfirmEdit = () => {
        // debugger;
        const {editKeys} = this.state;
        // mock ajax update item
        const editIdx = data.findIndex(ele => ele.id == editKeys.id);
        data.splice(editIdx, 1, editKeys);
        this.setState({
            tableData: data,
            editKeys: {
                id: "",
                name: "",
                price: "",
                storage: ""
            },
            showPopEdit: false
        });
        this.editUpdate = true;
    };

    render() {
        console.log('r default');
        // debugger;
        const {
            searchKeys,
            tableData,
            searchShow,
            addKeys,
            showPopAdd,
            editKeys,
            showPopEdit
        } = this.state;

        return (
            <div className="container">
                <h2>Search 1</h2>
                <SearchBar
                    searchKeys={searchKeys}
                    onSearchKeyChange={this.handleSearchKeyChange}
                    onSearchClick={this.handleSearch}
                    onClearClick={this.handleClear}
                    onAddClick={this.handleAddPopup}
                />
                <SearchResult
                    tableData={tableData}
                    searchKeys={searchKeys}
                    searchShow={searchShow}
                    onDeleteClick={this.handleDeletePopup}
                    onEditClick={this.handleEditPopup}
                    editUpdate={this.editUpdate}
                />

                <Modal
                    title="Add Item"
                    visible={showPopAdd}
                    onOk={this.handleConfirmAdd}
                    onCancel={this.handleCancelAdd}
                >
                    <div className="popup">
                        <div className="popup-content">
                            <form className="addPop">
                                <label>name:</label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={addKeys.name}
                                    onChange={this.handleAddKeyChange}
                                />
                                <label>price:</label>
                                <Input
                                    type="text"
                                    name="price"
                                    value={addKeys.price}
                                    onChange={this.handleAddKeyChange}
                                />
                                <label>storage:</label>
                                <Input
                                    type="text"
                                    name="storage"
                                    value={addKeys.storage}
                                    onChange={this.handleAddKeyChange}
                                />
                            </form>
                        </div>
                    </div>
                </Modal>

                <Modal
                    title="Edit Item"
                    visible={showPopEdit}
                    onOk={this.handleConfirmEdit}
                    onCancel={this.handleCancelEdit}
                >
                    <div className="popup">
                        <div className="popup-content">
                            <form className="addPop">
                                <label>name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editKeys.name}
                                    onChange={this.handleEditInputChange}
                                />
                                <label>price:</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={editKeys.price}
                                    onChange={this.handleEditInputChange}
                                />
                                <label>storage:</label>
                                <input
                                    type="text"
                                    name="storage"
                                    value={editKeys.storage}
                                    onChange={this.handleEditInputChange}
                                />
                            </form>
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }
}


