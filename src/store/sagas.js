/* eslint camelcase: 1 */
import { call, put, select, takeEvery } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';
import * as constants from '../constants';

import gql from "graphql-tag";
import graphql from "graphql-anywhere";

function* initialize() {
  const data = yield call(api.getKinoData);

  yield put({
    type: actions.INITIALIZATIONS,
    data
  });
}


function* rootSaga() {
  yield initialize();
}

export default rootSaga;