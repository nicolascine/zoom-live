import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SessionsActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';
import SessionsAPI from '../../services/http/http-sessions-api';

const sessionsAPI = new SessionsAPI();

export async function callApi() {
  return await sessionsAPI.getSessions();
}

function* handleFetch() {
  try {
    const res = yield call(callApi);

    if (!res.sessions) {
      yield put(fetchError(res));
    } else {
      yield put(fetchSuccess(res.sessions));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(SessionsActionTypes.FETCH_REQUEST, handleFetch);
}

export function* sessionsSaga() {
  yield all([fork(watchFetchRequest)]);
}
