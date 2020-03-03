import { ACTION_TYPES } from '../store/actions';

const { APPLY_FILTERS } = ACTION_TYPES;

export default (state = {}, { type, filteredCat }) => {
  switch (type) {
    case APPLY_FILTERS:
      return filteredCat;
    default:
      return state;
  }
};
