import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from './data';
import filters from './filters';
import filteredCat from './filteredCat';
import finish from './finish';

const createRootReducer = () => combineReducers({
  filters,
  data,
  filteredCat,
  form: formReducer,
  finish,
});

export default createRootReducer;
