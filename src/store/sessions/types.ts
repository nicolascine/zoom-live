// Response object for POST /get_sessions_noauth
// https://api.via.live/get_sessions_noauth
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  profile_img_url: string;
  name: string;
  description: string;
  banner_img_url: string;
}

export interface Session {
  id: number;
  user_id: number;
  name: string;
  description: string;
  start_time: number;
  cost: number;
  duration: number;
  meeting_url: {
    value: string;
  };
  profile_img_url: string;
  tags: string;
  is_draft: any;
  zoom_meeting_join_url: string;
  user: User;
}

export type ApiResponse = Record<string, any>;

export enum SessionsActionTypes {
  FETCH_REQUEST = '@@sessions/FETCH_REQUEST',
  FETCH_SUCCESS = '@@sessions/FETCH_SUCCESS',
  FETCH_ERROR = '@@sessions/FETCH_ERROR',
  SORT_BY_VALUE = '@@sessions/SORT_BY_VALUE',
  FILTER_BY_VALUE = '@@sessions/FILTER_BY_VALUE',
  RESET_FILTERS = '@@sessions/RESET_FILTERS',
}

export interface SessionsState {
  readonly loading: boolean;
  readonly data: Session[];
  readonly dataFiltered: Session[];
  readonly errors?: string;
}
