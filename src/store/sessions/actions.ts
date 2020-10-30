import { action } from 'typesafe-actions';
import { SessionsActionTypes, Session } from './types';

export const fetchRequest = () => action(SessionsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Session[]) =>
  action(SessionsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(SessionsActionTypes.FETCH_ERROR, message);

export const sortBy = (key: string, direction: string) =>
  action(SessionsActionTypes.SORT_BY, { key, direction });

export const filterBy = () => action(SessionsActionTypes.FILTER_BY);
