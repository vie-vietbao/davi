import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducer';
import rootSaga from './saga';
import {setupListeners} from '@reduxjs/toolkit/query';

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
setupListeners(store.dispatch);

export {store};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
