import { action } from 'typesafe-actions';
import { SessionsActionTypes, Sessions } from './types';

export const fetchRequest = () => action(SessionsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Sessions) =>
  action(SessionsActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(SessionsActionTypes.FETCH_ERROR, message);
