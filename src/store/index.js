import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/index';
import reducers from '../reducers/index';

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

const store = createStore(
  reducers,
  {},
  applyMiddleware(epicMiddleware),
);

export default store;