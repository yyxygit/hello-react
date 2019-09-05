import React from 'react';
import {data} from './data';

import 'antd/es/button/style/css';
import 'antd/es/input/style/css';
import 'antd/es/modal/style/css';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Modal from 'antd/es/modal';
import "./style1.css";

const {confirm} = Modal;

// 显示table记录条数
class ResultRowsNumber extends React.PureComponent {

    render() {
        const {totalNum} = this.props;
        console.log(`r ResultRowsNumber ${totalNum}`);
        return (
            <div id="total">
                result total: {totalNum}
            </div>
        );
    }
}

class FruitRow extends React.PureComponent {

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onDeleteClick(this.props.id);
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.props.onEditClick(this.props.id);
    }

    render() {
        const {id, name, price, storage} = this.props;
        console.log('r FruitRow', id);
        return (
            <tr className="tr-tableRes">
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{storage}</td>
                <td><Button onClick={this.handleDeleteClick}>Delete</Button></td>
                <td><Button onClick={this.handleEditClick}>Edit</Button></td>
            </tr>
        );
    }
}

function FruitsTable(props) {
    console.log('r FruitsTable');
    // debugger;
    const {fruits} = props;
    const rows = fruits.map(ele => (
        <FruitRow
            {...ele}
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

// class SearchConditions extends React.PureComponent {
//
//     render() {
//         const {id, name, price, storage} = this.props;
//         console.log('r SearchConditions');
//         return (
//             <div className="condistions-search">
//                 <span>id:</span><span>{id}</span>
//                 <span>name:</span><span>{name}</span>
//                 <span>price:</span><span>{price}</span>
//                 <span>storage:</span><span>{storage}</span>
//             </div>
//         );
//     }
// }

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        //内部保存显示table的记录条数
        this.dataLength = this.props.tableData.length;
        /**
         * 与父组件editUpdate标志位对比，决定是否需要更新table
         * this.props.editUpdate == true 更新 false 不更新
         * 每次更新后，重置子组件与父组件的editUpdate标志位
         */
        this.editUpdate = this.props.editUpdate;
    }

    /**
     * 对复杂数据结构tableData对象数组 props 优化
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger;
        if(this.props.searchShow != nextProps.searchShow) {
            return true;
        }
        if(this.dataLength != nextProps.tableData.length) {
            this.dataLength = nextProps.tableData.length;
            return true;
        }
        if(this.editUpdate != nextProps.editUpdate) {
            this.editUpdate = false;
            this.props.resetEditUpdate();
            return true;
        }
        return false;
    }

    render() {
        const {
            searchShow,
            tableData,
            onDeleteClick,
            onEditClick
        } = this.props;

        console.log('r SearchResult', searchShow);

        return searchShow ?
            (
                <FruitsTable
                    fruits={tableData}
                    onDeleteClick={onDeleteClick}
                    onEditClick={onEditClick}
                />
            ) : null;
    }
}

class SearchBar extends React.PureComponent {
    state = {
        id: "",
        name: "",
        price : "",
        storage: ""
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.onSearchClick(JSON.parse(JSON.stringify(this.state)));
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const {target} = e;
        // debugger;
        const key = target.name;
        const value = key !== "name" ?
            target.value.trim() : target.value;
        this.setState({
            [key]: value
        });
    }

    handleClearClick = (e) => {
        e.preventDefault();
        this.setState({
            id: "",
            name: "",
            price : "",
            storage: ""
        });
        this.props.onClearClick();
    }

    handleAddClick = (e) => {
        e.preventDefault();
        this.props.onAddClick();
    }

    render() {
        const {id, name, price, storage} = this.state;
        // debugger;
        console.log('r SearchBar');
        return (
            <div>
                <form className="search-form">
                    <label>id:</label>
                    <Input
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.handleInputChange}
                    />
                    <label>name:</label>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                    />
                    <label>price:</label>
                    <Input
                        type="text"
                        name="price"
                        value={price}
                        onChange={this.handleInputChange}
                    />
                    <label>storage:</label>
                    <Input
                        type="text"
                        name="storage"
                        value={storage}
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
                <div className="condistions-search">
                    <span>id:</span><span>{id}</span>
                    <span>name:</span><span>{name}</span>
                    <span>price:</span><span>{price}</span>
                    <span>storage:</span><span>{storage}</span>
                </div>
            </div>
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
            tableData: [],
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
            }
        };
        // 标志位，控制是否更新单条 table record
        // 重新渲染  SearchResult 组件前，置为true，更新显示后，复位false
        this.editUpdate = false;
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

    handleSearch = (searchKeys) => {
        // mock Ajax request data
        // 深拷贝对象数组数据
        // 载入一个全新的数组，与data.js没有关联
        let tableData = JSON.parse(JSON.stringify(data));
        const {id, name, price, storage} = searchKeys;

        if(id) {
            tableData = tableData.filter(item =>
                item.id == id);
        }

        if(name) {
            tableData = tableData.filter(item =>
                item.name.indexOf(name) !== -1);
        }

        if(price) {
            tableData = tableData.filter(item =>
                item.price == price);
        }

        if(storage) {
            tableData = tableData.filter(item =>
                item.storage == storage);
        }

        this.setState({
            searchKeys,
            tableData,
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
                // mock ajax delete item on server
                data.splice(delIndex, 1);
                console.log("delete item: ", delId);
                // mock ajax response return delete id
                _this.setState((prState) => {
                    const {tableData} = prState;
                    tableData.splice(delIndex, 1);
                    return {
                        tableData
                    };
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
            // addKeys: {
            //     name: "",
            //     price: "",
            //     storage: ""
            // },
            showPopAdd: false
        });
    }

    handleConfirmAdd = () => {
        // debugger;
        const {addKeys, tableData} = this.state;
        const isEmpty = Object.keys(addKeys).every(key => addKeys[key] == "");
        if(isEmpty) {
            console.log('add key cannot be empty!');
            this.handleCancelAdd();
        } else {
            const id = tableData[tableData.length - 1].id + 1;
            const addItem = {...addKeys, id};
            // mock ajax add record
            data.push(addItem);
            this.setState({
                tableData: JSON.parse(JSON.stringify(data)),
                // 清空add popup 输入框
                addKeys: {
                    name: "",
                    price: "",
                    storage: ""
                },
                showPopAdd: false
            });
        }
    }

    handleEditPopup = (editId) => {
        const item = this.state.tableData.find(ele => ele.id == editId);
        this.setState({
            // setState时，需小心引用类型属性，
            // 避免更新editKeys时，同步更改tableData中对应的item数据
            // 需要深拷贝，传递一个和原件没有关联的全新对象
            editKeys: JSON.parse(JSON.stringify(item)),
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
        // mock ajax update record on server
        const editIdx = data.findIndex(ele => ele.id == editKeys.id);
        data.splice(editIdx, 1, editKeys);
        // mock ajax response updated record
        const returnItem = {...editKeys};
        this.setState((preState) => {
            const {tableData} = preState;
            tableData.splice(editIdx, 1, returnItem);
            return {
                tableData,
                editKeys: {
                    id: "",
                    name: "",
                    price: "",
                    storage: ""
                },
                showPopEdit: false
            };
        });
        // 通知 SearchResult 组件，table记录更新
        this.editUpdate = true;
    };

    resetEditUpdate = () => {
        // 完成SearchResult 组件更新后，重置editUpdate状态
        this.editUpdate = false;
    }

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
                <h2>from 4 - antd</h2>
                <SearchBar
                    onSearchClick={this.handleSearch}
                    onClearClick={this.handleClear}
                    onAddClick={this.handleAddPopup}
                />
                <SearchResult
                    tableData={tableData}
                    searchShow={searchShow}
                    onDeleteClick={this.handleDeletePopup}
                    onEditClick={this.handleEditPopup}
                    editUpdate={this.editUpdate}
                    resetEditUpdate={this.resetEditUpdate}
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


