import React, { Component } from 'react';
import './App.css';
import { Table } from './components/table'
import { data } from './data'
import * as Actions from "./redux/actions";
import { connect } from 'react-redux'


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

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDipatchToProps(dispatch){
  return {
    putRowFirst: rowId => dispatch(Actions.rowSelectPre(rowId)),
  }
}

const PreparedApp = connect(
  mapStateToProps,
  mapDipatchToProps
)(App);

export default PreparedApp;
