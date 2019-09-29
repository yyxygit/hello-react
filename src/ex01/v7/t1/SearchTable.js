import React from 'react';

import 'antd/es/button/style/css';
import 'antd/es/table/style/css';

import Button from 'antd/es/button';
import Table from 'antd/es/table';


export default class extends React.Component {

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

     shouldComponentUpdate(nextProps, nextState, nextContext) {
        // debugger;
        if(this.dataLength != nextProps.tableData.length) {
            this.dataLength = nextProps.tableData.length;
            return true;
        }
        return false;
    }*/

    render() {
        const {
            searchShow,
            tableData,
        } = this.props;

        const tableWithKey = tableData.map((item) => {
            return {...item, 'key':item.id};
        });

        console.log('r SearchResult', searchShow);

        return (
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
        );
    }
}
