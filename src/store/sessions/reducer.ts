import { Reducer } from 'redux';
import { SessionsState, SessionsActionTypes, Session } from './types';
import { sortByValue } from '../../services/common/utils-serivice';

const initialState: SessionsState = {
  data: [] as Session[],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<SessionsState> = (state = initialState, action) => {
  switch (action.type) {
    case SessionsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SessionsActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case SessionsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case SessionsActionTypes.SORT_BY_VALUE: {
      return {
        ...state,
        loading: false,
        data: sortByValue(
          state.data,
          action.payload.key,
          action.payload.direction
        ),
      };
    }

    case SessionsActionTypes.FILTER_BY: {
      return { ...state, loading: false, data: state.data };
    }

    default: {
      return state;
    }
  }
};

export { reducer as sessionsReducer };
