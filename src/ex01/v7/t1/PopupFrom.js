import React from 'react';

import 'antd/es/input/style/css';
import 'antd/es/modal/style/css';

import Input from 'antd/es/input';
import Modal from 'antd/es/modal';


export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        // debugger;
        const {id, name, price, storage} = this.props;
        this.state = {id, name, price, storage};
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
        const {isAdd, onPopupConfirm} = this.props;
        const item = JSON.parse(JSON.stringify(this.state));
        if(isAdd) {
            delete item.id;
        }
        onPopupConfirm(item);
    }


    render() {
        const {name, price, storage} = this.state;
        const {isAdd} = this.props;
        // debugger;
        console.log('r PopupForm');
        return (
            <div className="popup">
                <Modal
                    title={isAdd ? "Add Item" : "Edit Item"}
                    visible={true}
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