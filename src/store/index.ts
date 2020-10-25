import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { sessionsSaga } from './sessions/sagas';
import { sessionsReducer } from './sessions/reducer';
import { SessionsState } from './sessions/types';

export interface ApplicationState {
  sessions: SessionsState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    sessions: sessionsReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(sessionsSaga)]);
}
