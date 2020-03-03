
export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  RECEIVE_FILTERS: 'RECEIVE_FILTERS',
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  APPLY_FILTERS: 'APPLY_FILTERS',
};

const {
  START_LOADING,
  RECEIVE_FILTERS,
  RECEIVE_CATEGORIES,
  APPLY_FILTERS,
} = ACTION_TYPES;

export const startLoading = () => ({ type: START_LOADING });
export const recievFilters = (filters) => ({ type: RECEIVE_FILTERS, filters });
export const recievCategories = (data) => ({ type: RECEIVE_CATEGORIES, data });
export const handleApply = (filteredCat) => ({ type: APPLY_FILTERS, filteredCat });
