import React from 'react';
import {data} from '../data';

import 'antd/es/modal/style/css';
import Modal from 'antd/es/modal';

import "../style1.css";

import SearchBar from "./SearchBar";
import SearchTable from "./SearchTable";
import PopupForm from "./PopupFrom";

const {confirm} = Modal;

export default  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 搜索结果列表
            tableData: [],
            // 是否显示搜索结果
            searchShow: false,
            // 添加&编辑弹出框键值对象
            popupKeys: {
                id: "",
                name: "",
                price: "",
                storage: ""
            },
            // 是否显示添加或编辑弹出框
            showPopup: false,
            // 是否添加弹出框，true添加弹出框，false编辑弹出框
            isAdd: false,
        };
        // 标志位，控制是否更新单条 table record
        // 重新渲染  SearchResult 组件前，置为true，更新显示后，复位false
        this.editUpdate = false;
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
            tableData,
            searchShow: true
        });
    }

    handleClear = () => {
        this.setState({
            tableData: [],
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
            isAdd: true,
            showPopup: true
        });
    }

    handleConfirmAdd = (addKeys) => {
        // debugger;
        const isEmpty = Object.keys(addKeys).
        every(key => addKeys[key] == "");
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
                    showPopup: false,
                    searchShow: true
                };
            });
        }
    }

    handleEditPopup = (editId) => {
        const item = this.state.tableData
            .find(ele => ele.id == editId);
        this.setState({
            popupKeys: JSON.parse(JSON.stringify(item)),
            isAdd: false,
            showPopup: true
        });
    }

    handleConfirmEdit = (editKeys) => {
        // debugger;
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
                popupKeys: {
                    id: "",
                    name: "",
                    price: "",
                    storage: ""
                },
                showPopup: false
            };
        });
        // 通知 SearchResult 组件，table记录更新
        this.editUpdate = true;
    };

    handlePopupCancel = () => {
        this.setState({
            // 清空弹出窗内数据
            popupKeys: {
                id: "",
                name: "",
                price: "",
                storage: ""
            },
           showPopup: false
        });
    }

    handlePopupConfirm = (item) => {
        // debugger;
        const {isAdd} = this.state;
        isAdd ? this.handleConfirmAdd(item) :
            this.handleConfirmEdit(item);
    }

    resetEditUpdate = () => {
        // 完成SearchResult 组件更新后，重置editUpdate状态
        this.editUpdate = false;
    }

    render() {
        console.log('r default');
        // debugger;
        const {
            tableData,
            searchShow,
            popupKeys,
            showPopup,
            isAdd
        } = this.state;

        return (
            <div className="container">
                <h2>from 1 - v7 splice files</h2>
                <SearchBar
                    onSearchClick={this.handleSearch}
                    onClearClick={this.handleClear}
                    onAddClick={this.handleAddPopup}
                />
                {searchShow && <SearchTable
                    tableData={tableData}
                    onDeleteClick={this.handleDeletePopup}
                    onEditClick={this.handleEditPopup}
                    editUpdate={this.editUpdate}
                    resetEditUpdate={this.resetEditUpdate}
                />}
                {showPopup && <PopupForm
                    {...popupKeys}
                    isAdd={isAdd}
                    onPopupCancel={this.handlePopupCancel}
                    onPopupConfirm={this.handlePopupConfirm}
                />}
            </div>
        );
    }
}


