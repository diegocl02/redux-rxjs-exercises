import React, { Component } from 'react';
import './App.css';
import { Table } from './components/table'
import { data } from './data'

class App extends Component {
  handleRowClicked = (rowId) => {
    this.props.putRowFirst(rowId)
  }
  render() {
    return (
      <div className="App">
        <Table data={data} first={this.props.firstRow} reportRowClicked={this.handleRowClicked}/>
      </div>
    );
  }
}

export default App;
