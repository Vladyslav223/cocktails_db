
import { ACTION_TYPES } from './actions';

const {
  START_LOADING,
  FINISH_LOADING,
  RECIEVE_PHOTOS,
} = ACTION_TYPES;

export const initialState = {
  isLoading: false,
  categories: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_PHOTOS:
      console.log('payload', action.payload);
      return {
        ...state,
        categories: action.payload,
      };

    case START_LOADING:
    return {
      isLoading: true,
    }  

    case FINISH_LOADING:
    return {
      isLoading: false,
    }  

    default:
      return state;
  }
};
