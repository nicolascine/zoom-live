const config = {
  BASE_URL: 'https://api.via.live/',
  ENDPOINTS: {
    GET_SESSIONS: 'get_sessions_noauth',
  },
  GET_SESSIONS_PARAMS: {
    date: Math.round(new Date().getTime() / 1000), //Unix timestamp (current date)
    limit: 100,
  },
  DISPLAY_DATE_FORMAT: 'MM/DD/YYYY',
};

export default config;
