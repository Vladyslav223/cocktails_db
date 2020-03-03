
export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
  RECIEVE_PHOTOS: 'RECIEVE_PHOTOS',
};

const {
  START_LOADING,
  FINISH_LOADING,
  RECIEVE_PHOTOS,
} = ACTION_TYPES;

export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });
export const recievPhotos = (payload) => ({ type: RECIEVE_PHOTOS, payload });
