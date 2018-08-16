import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./redux/reducer";
import * as Actions from "./redux/actions";
import { createEmptyAppState } from "./redux/create-empty";
import { bindObservableAsProps } from "./redux/bind";
import { Observable } from "rxjs";

const store = createStore(reducer, createEmptyAppState());

function appStateToProps(state) {
  return {
    putRowFirst: rowId => store.dispatch(Actions.putRowFirst(rowId)),
    ...state
  };
}

const PreparedApp = bindObservableAsProps(
  // $FlowFixMe: Teach flow about Symbol.observable
  Observable.from(store)
    .distinctUntilChanged()
    .map(state => appStateToProps(state)),
  App
);

ReactDOM.render(<PreparedApp />, document.getElementById("root"));
registerServiceWorker();
