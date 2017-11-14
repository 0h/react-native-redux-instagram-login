import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AppReducer from "./reducers";
import AppWithNavigationState from "./navigators/AppNavigator";

import { composeWithDevTools } from "redux-devtools-extension";

export default class App extends Component {
  store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
