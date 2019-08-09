import React from 'react';
import {data} from './data2';
import "./style1.css";

class ResultRowsNumber extends React.Component {
    render() {
        return (
            <div id="total">
                result total: {this.props.totalNum}
            </div>
        );
    }
}

class FruitRow extends React.Component {
    render() {
        const fruit = this.props.fruit;
        return (
            <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.storage}</td>
            </tr>
        );
    }
}

class FruitsTable extends React.Component {
    render() {
        let resList = this.props.fruits;

        if(this.props.sId) {
            resList = data.filter(item => item.id == this.props.sId);
        }

        const name = this.props.sName.trim();
        if(name) {
            // resList = resList.filter(item => item.name == name);
            resList = resList.filter(item => item.name.indexOf(name) !== -1);
        }

        if(this.props.sPrice) {
            resList = resList.filter(item => item.price == this.props.sPrice);
        }

        if(this.props.sStorage) {
            resList = resList.filter(item => item.storage == this.props.sStorage);
        }

        const rows = resList.map(ele => (
            <FruitRow fruit={ele} key={ele.id} />
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
}

class SearchConditions extends React.Component {
    render() {
        return (
            <div id="seachKeys">
                id: {this.props.sId}
                name: {this.props.sName}
                price: {this.props.sPrice}
                storage: {this.props.sStorage}
            </div>
        );
    }
}

class SearchResult extends React.Component {
    render() {
        return this.props.show ?
            (
                <div>
                    <SearchConditions
                        sId={this.props.sId}
                        sName={this.props.sName}
                        sPrice={this.props.sPrice}
                        sStorage={this.props.sStorage}
                    />
                    <FruitsTable
                        fruits={data}
                        sId={this.props.sId}
                        sName={this.props.sName}
                        sPrice={this.props.sPrice}
                        sStorage={this.props.sStorage}
                    />
                </div>
            ) : null;
    }
}

class SearchBar extends React.Component {


    handleIdChange = (e) => {
        this.props.onSearchIdChange(e.target.value.trim());
    }

    handleNameChange = (e) => {
        this.props.onSearchNameChange(e.target.value);
    }

    handlePriceChange = (e) => {
        this.props.onSearchPriceChange(e.target.value.trim());
    }

    handleStorageChange = (e) => {
        this.props.onSearchStorageChange(e.target.value.trim());
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.onSearchClick();
    }

    handleClearClick = (e) => {
        e.preventDefault();
        this.props.onClearClick();
    }

    render() {
        return (
            <form>
                <label>id:</label>
                <input
                    type="text"
                    value={this.props.sId}
                    onChange={this.handleIdChange}
                />
                <label>name:</label>
                <input
                    type="text"
                    value={this.props.sName}
                    onChange={this.handleNameChange}
                />
                <label>price:</label>
                <input
                    type="text"
                    value={this.props.sPrice}
                    onChange={this.handlePriceChange}
                />
                <label>storage:</label>
                <input
                    type="text"
                    value={this.props.sStorage}
                    onChange={this.handleStorageChange}
                />
                <button
                    onClick={this.handleSearchClick}
                >
                    search
                </button>
                <button
                    onClick={this.handleClearClick}
                >
                    clear
                </button>
            </form>
        );
    }
}

export default  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sId: "",
          sName: "",
          sPrice: "",
          sStorage: "",
          search: false
        };
    }

    handleSearchIdChange = (value) => {
        this.setState({
           sId: value
        });
    }

    handleSearchNameChange = (value) => {
        this.setState({
            sName: value
        });
    }

    handleSearchPriceChange = (value) => {
        this.setState({
            sPrice: value
        });
    }

    handleSearchStorageChange = (value) => {
        this.setState({
            sStorage: value
        });
    }

    handleSearch = () => {
        this.setState({
            search: true
        });
    }

    handleClear = () => {
        this.setState({
            sId: "",
            sName: "",
            sPrice: "",
            sStorage: "",
            search: false
        });
    }


    render() {
        return (
          <div>
              <SearchBar
                  sId={this.state.sId}
                  sName={this.state.sName}
                  sPrice={this.state.sPrice}
                  sStorage={this.state.sStorage}
                  onSearchIdChange = {this.handleSearchIdChange}
                  onSearchNameChange = {this.handleSearchNameChange}
                  onSearchPriceChange = {this.handleSearchPriceChange}
                  onSearchStorageChange = {this.handleSearchStorageChange}
                  onSearchClick = {this.handleSearch}
                  onClearClick = {this.handleClear}
              />
            <SearchResult
                sId={this.state.sId}
                sName={this.state.sName}
                sPrice={this.state.sPrice}
                sStorage={this.state.sStorage}
                show={this.state.search}
            />
          </div>
        );
    }
}


