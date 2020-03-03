import { ACTION_TYPES } from '../store/actions';

const { RECEIVE_FILTERS } = ACTION_TYPES;

export default (state = {}, { type, filters }) => {
  switch (type) {
    case RECEIVE_FILTERS:
      return filters;

    default:
      return state;
  }
};
