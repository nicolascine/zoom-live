import { action } from 'typesafe-actions';
import { SessionsActionTypes, Session } from './types';

export const fetchRequest = () => action(SessionsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Session[]) =>
  action(SessionsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(SessionsActionTypes.FETCH_ERROR, message);

export const sortByValue = (key: string, direction: string) =>
  action(SessionsActionTypes.SORT_BY_VALUE, { key, direction });

export const filterByValue = (key: string, value: number) =>
  action(SessionsActionTypes.FILTER_BY_VALUE, { key, value });
