import { Provider } from "react-redux";
import React, { Component } from "react";
import moment from "moment";
import configureStore from "../store/store";

import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import App from "./App";

const initialState = {
  // data: {
  //   kinoData: {},
  // },
  initialized: false,
  startDate: moment().subtract(7, "days"),
  endDate: moment(),
  maxDate: moment(),
  occurences: [],
  loading: false,
  kinos: {},
  allkinos: {},
  limited: false,
  prediction: [],
  maData: [],
  lwmaData: [],
  waitForPrediction: false
};

const Root = () => (
  <Provider store={configureStore(initialState)}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

export default Root;
