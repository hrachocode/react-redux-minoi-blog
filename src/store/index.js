import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from './reducers';

const persistConfig = {
      key: 'root',
      storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
      persistedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // development purposes
);

let persistor = persistStore(store);
export { store, persistor };