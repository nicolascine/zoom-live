import CONFIG from '../../config';
import HttpClient from './http-client';
import { Session } from './types';

class SessionsAPI extends HttpClient {
  public constructor() {
    super(CONFIG.BASE_URL);
  }

  public getSessions = () =>
    this.instance.post<Session[]>(
      CONFIG.ENDPOINTS.GET_SESSIONS,
      CONFIG.GET_SESSIONS_PARAMS
    );
}

export default SessionsAPI;
