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

  yield put({
    type: actions.KINO_DATA_FETCHED,
    kino,
  });
}

function* fetchKinosForDates (action) {
  const { startDate, endDate } = action;
  debugger;
  const { res, fromDate, toDate } = yield call(api.fetchKinos, startDate, endDate);
  console.log('fetched', res);
  // debugger;
  // console.log('startDate', startDate);
  // console.log('endDate', endDate);

  yield put({
    type: actions.SAGAS_KINOS_FETCHED,
    res,
    startDate: fromDate,
    endDate: toDate,
  });
}

function* rootSaga () {
  yield initialize();
  yield takeEvery(actions.FETCH_FOR_DATE, fetchForDate);
  yield takeEvery(actions.FETCH_KINOS_FOR_DATES, fetchKinosForDates);
}

export default rootSaga;
