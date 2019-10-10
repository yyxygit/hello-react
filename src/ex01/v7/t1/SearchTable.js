import React from 'react';

import 'antd/es/button/style/css';
import 'antd/es/table/style/css';

import Button from 'antd/es/button';
import Table from 'antd/es/table';


export default class extends React.Component {

    constructor(props) {
        super(props);
        //内部保存显示table的记录条数
        // dataLength 用来判断是否要更新，不放在state或props里
        // state/props 改变后都会触发render
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
        // 当删除或添加记录，数据表格长度变化时，更新表格
        if(this.dataLength != nextProps.tableData.length) {
            this.dataLength = nextProps.tableData.length;
            return true;
        }
        // 当确定更新记录成功后，更新表格
        if(nextProps.editUpdate) {
            this.props.resetEditUpdate();
            return true;
        }

        return false;
    }

    render() {
         // 引用对象数据，不适合做纯组件
        const {tableData} = this.props;

        const tableWithKey = tableData.map((item) => {
            return {...item, 'key':item.id};
        });

        console.log('r SearchResult');

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
