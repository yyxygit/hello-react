import React from 'react';

import 'antd/es/button/style/css';
import 'antd/es/input/style/css';

import Button from 'antd/es/button';
import Input from 'antd/es/input';


export default class extends React.PureComponent {
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
