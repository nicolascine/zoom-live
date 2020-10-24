import CONFIG from '../../config';
import HttpClient from './http-client';
import { Session } from './types';

class MainApi extends HttpClient {
  public constructor() {
    super(CONFIG.BASE_URL);
  }

  public getSessions = () =>
    this.instance.get<Session[]>(CONFIG.ENDPOINTS.GET_SESSIONS);
}

export default MainApi;
