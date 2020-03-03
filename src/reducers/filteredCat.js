import { ACTION_TYPES } from '../store/actions';

const { APPLY_FILTERS } = ACTION_TYPES;

export default (state = { filteredCat: [] }, payload) => {
  switch (payload.type) {
    case APPLY_FILTERS:
      return {
        ...state,
        filteredCat: [...payload.filteredCat],
      };

    default:
      return state;
  }
};
