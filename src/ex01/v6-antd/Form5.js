import React from 'react';
import {data} from './data';

import 'antd/es/button/style/css';
import 'antd/es/table/style/css';
// import 'antd/es/modal/style/css';
import Button from 'antd/es/button';
import Table from 'antd/es/table';
// import Modal from 'antd/es/modal';
import "./style1.css";

export default class extends React.Component {



    render() {
        const tableData = JSON.parse(JSON.stringify(data));
        const columns = [
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

        return (
          <div className="table">
            <Table columns={columns} dataSource={tableData} />
          </div>
        );
    }
}