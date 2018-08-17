import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PreparedApp from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./redux/reducer";
import { createEmptyAppState } from "./redux/create-empty";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import * as epics from "./redux/epics";
import 'rxjs';

import {Provider} from  'react-redux';

// const rootEpic = combineEpics(epics.saveField);
const epicMiddleware = createEpicMiddleware();

const getStore = () => {
  const store = createStore(
    reducer,
    createEmptyAppState(),
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(epics.saveField)

  return store;
};

const store = getStore()

ReactDOM.render(<Provider store={store}><PreparedApp /></Provider>, document.getElementById("root"));
registerServiceWorker();
