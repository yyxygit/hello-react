import React from 'react';
import {data} from './data';

import 'antd/es/button/style/css';
import 'antd/es/input/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/table/style/css';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Modal from 'antd/es/modal';
import Table from 'antd/es/table';
import "./style1.css";

const {confirm} = Modal;

class PopupForm extends React.PureComponent {
    state = {
        id: "",
        name: "",
        price : "",
        storage: ""
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

    handleCancel = () => {
        this.props.onPopupCancel();
    }

    handleConfirm = () => {
        this.props.onPopupConfirm();
    }


    render() {
        const {name, price, storage} = this.state;
        const {showPopup, isAdd} = this.props;
        // debugger;
        console.log('r PopupForm');
        return (
            <div className="popup">
                <Modal
                    title={isAdd ? "Add Item" : "Edit Item"}
                    visible={showPopup}
                    onOk={this.handleConfirm}
                    onCancel={this.handleCancel}
                >
                    <div className="popup-content">
                        <form>
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
                        </form>
                </div>
                </Modal>
            </div>
        );
    }

}

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        //内部保存显示table的记录条数
        this.dataLength = this.props.tableData.length;

        this.columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price'
            },
            {
                title: 'Storage',
                dataIndex: 'storage',
                key: 'storage'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record, index) => {
                    return (
                        <span>
                            <Button
                                name={record.id}
                                onClick={this.handleDeleteClick}>
                                Delete
                            </Button>
                            <Button
                                name={record.id}
                                onClick={this.handleEditClick}>
                                Edit
                            </Button>
                        </span>
                    );
                }
            }
        ];
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.onDeleteClick(e.target.name);
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.props.onEditClick(e.target.name);
    }

    /**
     * 对复杂数据结构tableData对象数组 props 优化
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // debugger;
        if(this.props.searchShow != nextProps.searchShow) {
            return true;
        }
        if(this.dataLength != nextProps.tableData.length) {
            this.dataLength = nextProps.tableData.length;
            return true;
        }
        /**
         * editUpdate用来阻止弹出编辑框内，输入时，渲染table
         * 仅当edit button按下后，数据更新再渲染table
         * click edit btn > 触发更新记录 > 触发父组件标志位editUpdate=true
         * setStatus更新tableData > 触发父组件更新render > 触发子组件render update > 传入新props editUpdate=true
         * table组件更新， 并将父组件的标志位复位
         */
        if(nextProps.editUpdate) {
            this.props.resetEditUpdate();
            return true;
        }
        return false;
    }

    render() {
        const {
            searchShow,
            tableData,
        } = this.props;

        const tableWithKey = tableData.map((item) => {
            return {...item, 'key':item.id};
        });

        console.log('r SearchResult', searchShow);

        return searchShow ? (
            <div className="table-contain">
                <Table
                    columns={this.columns}
                    dataSource={tableWithKey}
                    pagination={{
                        showTotal: (total) => {
                            return `Total ${total} items`;
                        }
                    }}
                />
            </div>
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
            showPopEdit: false,
            showPopup: false,
            isAdd: false,
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
                    const delTableIndex = tableData.findIndex(ele => ele.id == delId);
                    tableData.splice(delTableIndex, 1);
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
        const {addKeys} = this.state;
        const isEmpty = Object.keys(addKeys).every(key => addKeys[key] == "");
        if(isEmpty) {
            console.log('add key cannot be empty!');
            this.handleCancelAdd();
        } else {
            // mock ajax add record
            const id = data[data.length - 1].id + 1;
            const addItem = {...addKeys, id};
            data.push(addItem);
            // 假设添加记录后服务端返回被添加的记录

            this.setState((preState) => {
                const { tableData } = preState;
                const addTableIdx = tableData.findIndex(ele => ele.id == id);

                if(addTableIdx === -1) {
                    tableData.push(addItem);
                } else {
                    tableData[addTableIdx] = addItem;
                }
                return {
                    tableData,
                    // 清空add popup 输入框
                    addKeys: {
                        name: "",
                        price: "",
                        storage: ""
                    },
                    showPopAdd: false,
                    searchShow: true
                };
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
            let {tableData} = preState;
            const editTableIdx = tableData.findIndex(ele => ele.id == editKeys.id);
            tableData[editTableIdx] = returnItem;
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

    handlePopupCancel = () => {
        this.setState({
           showPopup: false
        });
    }

    handlePopupConfirm = () => {

    }


    render() {
        console.log('r default');
        // debugger;
        const {
            // searchKeys,
            tableData,
            searchShow,
            addKeys,
            showPopup,
            isAdd,
            showPopEdit,
            editKeys
        } = this.state;

        return (
            <div className="container">
                <h2>from 8 - Popup Component 1</h2>
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
                <PopupForm
                    showPopup={showPopup}
                    isAdd={isAdd}
                    onPopupCancel={this.handlePopupCancel}
                    onPopupConfirm={this.handlePopupConfirm}
                />


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
                                <Input
                                    type="text"
                                    name="name"
                                    value={editKeys.name}
                                    onChange={this.handleEditInputChange}
                                />
                                <label>price:</label>
                                <Input
                                    type="text"
                                    name="price"
                                    value={editKeys.price}
                                    onChange={this.handleEditInputChange}
                                />
                                <label>storage:</label>
                                <Input
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


