import { ACTION_TYPES } from '../store/actions';

const { RECEIVE_CATEGORIES } = ACTION_TYPES;

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_CATEGORIES:
      return data;
    default:
      return state;
  }
};
