/* eslint camelcase: 1 */
import { call, put, select, takeEvery } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';

import whatismykino from '../utils/whatismykino';
import * as constants from '../constants';

import gql from 'graphql-tag';
import graphql from 'graphql-anywhere';

import { groupBy } from '30-seconds-of-code';

function* initialize () {
  const initialized = yield call(api.getKinoData);

  yield put({
    type: actions.INITIALIZATIONS,
    initialized,
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

  const { kinos, fromDate, toDate } = yield call(api.fetchKinos, startDate, endDate);
  // console.log('fetched', kinos);

  const groupped = groupBy(kinos, 'kino');
  // whatismykino(kinos);

  const occurences = Object.keys(groupped).map(key =>
    ({ kino: key, occurences: groupped[key].length }));

  yield put({
    type: actions.SAGAS_KINOS_FETCHED,
    kinos,
    startDate: fromDate,
    endDate: toDate,
    occurences,
  });
}

function* limitKinos (action) {
  const state = yield select();

  const prediction = yield call(whatismykino, state.kinos); // kinos here are limited already
  console.log(prediction);

  yield put({
    type: actions.SAGAS_PREDICTION,
    prediction,
  });
}

function* rootSaga () {
  yield initialize();
  yield takeEvery(actions.FETCH_FOR_DATE, fetchForDate);
  yield takeEvery(actions.FETCH_KINOS_FOR_DATES, fetchKinosForDates);
  yield takeEvery(actions.LIMIT_KINOS, limitKinos);
}

export default rootSaga;
