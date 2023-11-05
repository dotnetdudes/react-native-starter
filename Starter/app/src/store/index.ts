import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { createReducer } from './reducers';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
] as StoreEnhancer[];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, createReducer());

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware as SagaMiddleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
  enhancers,
});

const persistor = persistStore(store);

export { store, persistor };
