import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from '../reducers';
import mySaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(mySaga);

export default store;
