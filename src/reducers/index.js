import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from './data';
import filters from './filters';
import filteredCat from './filteredCat';

const createRootReducer = () => combineReducers({
  filters,
  data,
  filteredCat,
  form: formReducer,
});

export default createRootReducer;
