import { takeLatest, call, put } from 'redux-saga/effects';
import { startLoading, finishLoading, recievPhotos } from '../store/actions';

import fetchPhotos from '../api';

export function* getApiData() {
  try {
    // do api call
    const data = yield call(fetchPhotos);
    //console.log('data', data);
    yield put(recievPhotos(data));
    yield put(finishLoading);
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(startLoading, getApiData);
}
