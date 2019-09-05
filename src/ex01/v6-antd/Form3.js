import React from 'react';
import {data} from './data';
import 'antd/es/button/style/css';
import 'antd/es/input/style/css';
import 'antd/es/modal/style/css';
import 'antd/es/table/style/css';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Modal from 'antd/es/modal';
import Table from 'antd/es/modal';
import "./style1.css";

const {confirm} = Modal;

/**
 * 尝试字组件自主控制状态
 * searchBar可以
 * searchRes table 操作不行
 * 需与searchBar Add button等action互动
 * 子组件可以通过事件回调函数，向父组件传递状态（数据）
 * 但父组件事件触发，要更新子组件，或其他子组件间要传递数据
 * 只能通过父组件统一更新状态或props
 * 官网建议，如果有公用的数据联动，将状态提升到共同的父组件
 * 子组件，只放完全由其控制的数据状态，比如searchBar内的输入值，
 * 不会受到其他组件的更改，只有它们更改后触发其他组件更新，可以回调传出状态
 * tableData的数据，会受到search/add/clear等其他外部组件的更新
 * 如果数据在父组件和子组件内，都存在，出现派生状态，情况复杂化，有待学习
 */

// 显示table记录条数
class ResultRowsNumber extends React.PureComponent {
    constructor(props) {
        super(props);
    }

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


class SearchBar extends React.PureComponent {
    state = {
        id: "",
        name: "",
        price : "",
        storage: ""
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.onSearchClick(this.state);
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

    render() {
        const {id, name, price, storage} = this.state;
        // debugger;

        return (
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
        );
    }

}

class FruitsTable extends React.Component {
    state = {
        //保存数据记录
        tableData: []
    }

    componentDidMount() {
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
        // mock Ajax request data
        // data.js 中的data数组模拟返回的table数据值
        // no search keys then search all records
        // 深拷贝对象数组数据
        // 载入一个全新的数组，与data.js没有关联
        let tableData = JSON.parse(JSON.stringify(data));
        const {id, name, price, storage} = this.props;
        // id filter
        if(id) {
            tableData = tableData.filter(item =>
                item.id == id);
        }
        // name filter
        if(name) {
            tableData = tableData.filter(item =>
                item.name.indexOf(name) !== -1);
        }
        // price filter
        if(price) {
            tableData = tableData.filter(item =>
                item.price == price);
        }
        // storage filter
        if(storage) {
            tableData = tableData.filter(item =>
                item.storage == storage);
        }
        // tableData = tableData.map();

        this.setState({tableData});
    }



    renderTable = () => {
        const {tableData} = this.state;
        return (
          <div>
              <Table
                  columns={this.columns}
                  dataSource={tableData}
                  />
          </div>
        );
    }

    render() {
        const {tableData} = this.state;
        console.log('r FruitsTable');
        return (
            <div>
                {tableData.length !== 0 && this.renderTable()}
                {/*<ResultRowsNumber totalNum={rows.length}  />*/}
            </div>
        );
    }
}

class SearchConditions extends React.PureComponent {

    render() {
        const {id, name, price, storage} = this.props;
        console.log('r SearchConditions');
        return (
            <div className="condistions-search">
                <span>id:</span><span>{id}</span>
                <span>name:</span><span>{name}</span>
                <span>price:</span><span>{price}</span>
                <span>storage:</span><span>{storage}</span>
            </div>
        );
    }
}

export default class extends React.Component {
    state = {
        searchKeys: {
            id: "",
            name: "",
            price : "",
            storage: ""
        },
        searchShow: false
    };

    handleSearch = (searchKeys) => {
        this.setState({
            searchShow: true,
            searchKeys
        });
    }

    render() {
        const {searchShow, searchKeys} = this.state;
        return (
            <div className="container">
                <h2>from 3 - antd 2</h2>
                <SearchBar
                    onSearchClick={this.handleSearch}
                />
                {searchShow ?
                    (
                        <div>
                            <SearchConditions
                                {...searchKeys}
                            />
                            <FruitsTable
                                {...searchKeys}
                                // onDeleteClick={onDeleteClick}
                                // onEditClick={onEditClick}
                            />
                        </div>
                    ) : null}
            </div>
        );
    }
}

