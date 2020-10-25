import { Reducer } from 'redux';
import { SessionsState, SessionsActionTypes, Sessions } from './types';

const initialState: SessionsState = {
  data: {} as Sessions,
  errors: undefined,
  loading: false,
};

const reducer: Reducer<SessionsState> = (state = initialState, action) => {
  switch (action.type) {
    case SessionsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SessionsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case SessionsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as sessionsReducer };
