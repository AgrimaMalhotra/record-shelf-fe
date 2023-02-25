export const BACKEND_URL = 'http://localhost:8080';

export const GET_SONGS_DATA = {
  method: 'GET',
  url: '/api/records',
};

export const GET_LIKES_PER_SONG_ID = (id) => ({
  method: 'GET',
  url: `/api/records/${id}/likes`,
});

export const UPDATE_LIKES_PER_SONG_ID = (id) => ({
  method: 'PATCH',
  url: `/api/records/${id}/likes`,
});
