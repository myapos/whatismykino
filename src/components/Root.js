import { Provider } from "react-redux";
import React, { Component } from "react";

import configureStore from "../store/store";

import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import App from './App';

const initialState = {
  data: {}
};

const Root = () => (
  <Provider store={configureStore(initialState)}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

export default Root;