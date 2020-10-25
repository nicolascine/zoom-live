import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SessionsActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';

export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: any
) {
  const res = await fetch(`${url}/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

const API_ENDPOINT = 'https://api.via.live';

function* handleFetch() {
  try {
    const res = yield call(
      callApi,
      'post',
      API_ENDPOINT,
      'get_sessions_noauth',
      {
        date: 1603483604,
        limit: 100,
      }
    );

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
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
