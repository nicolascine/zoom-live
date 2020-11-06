const config = {
  BASE_URL: 'https://api.via.live/',
  ENDPOINTS: {
    GET_SESSIONS: 'get_sessions_noauth',
  },
  GET_SESSIONS_PARAMS: {
    //Unix timestamp (current date)
    date: Math.round(new Date().getTime() / 1000),
    limit: 100,
  },
  DISPLAY_DATE_FORMAT: 'MM/DD/YYYY',
  VIDEO_IFRAME_URL: '//via.live/zoom_player/',
  NO_IMAGE_PLACEHOLDER: (text: string) =>
    `https://via.placeholder.com/320?text=${text.slice(0, 10)}...`,

  MAX_LENGTH_ITEM_DESCRIPTION: 180,
};

export default config;
