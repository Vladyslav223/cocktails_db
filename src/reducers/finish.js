import { ACTION_TYPES } from '../store/actions';

const { FINISH_LOADING } = ACTION_TYPES;

export default (state = { isLoading: true }, { type }) => {
  switch (type) {
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
