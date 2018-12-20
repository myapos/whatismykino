/* eslint camelcase: 1 */
import { call, put, select, takeEvery } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';
import * as constants from '../constants';

import gql from 'graphql-tag';
import graphql from 'graphql-anywhere';

function* initialize () {
  const data = yield call(api.getKinoData);

  yield put({
    type: actions.INITIALIZATIONS,
    data,
  });
}

function* fetchForDate (action) {
  const kino = yield call(api.fetchKinoDraws, action.date);
  console.log(kino);

  yield put({
    type: actions.KINO_DATA_FETCHED,
    kino,
  });
}

function* rootSaga () {
  yield initialize();
  yield takeEvery(actions.FETCH_FOR_DATE, fetchForDate);
}

export default rootSaga;
