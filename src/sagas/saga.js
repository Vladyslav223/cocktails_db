import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import { recievCategories, recievFilters, ACTION_TYPES } from '../store/actions';

import { fetchCategories, fetchFilters } from '../api';

export const getFilters = (state) => state.filters;

export function* getApiFilters() {
  try {
    const filters = yield call(fetchFilters);
    yield put(recievFilters(filters));
  } catch (e) {
    console.log(e);
  }
}

export function* getApiCategories() {
  try {
    const filters = yield select(getFilters);
    const data = yield call(() => fetchCategories(filters));
    // console.log('data', data);
    yield put(recievCategories(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(ACTION_TYPES.START_LOADING, getApiFilters);
  yield takeEvery(ACTION_TYPES.RECEIVE_FILTERS, getApiCategories);
}
