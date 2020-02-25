// import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux';
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from '~/reducers';

// const navigation = createReactNavigationReduxMiddleware(
//   state => state.navigation
// );

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['taskReducer'],
  debug: true,
};

const middlewares = [
  thunk,
  // navigation
];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = persistCombineReducers(rootPersistConfig, { ...rootReducers });

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, composeEnhancers);
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(
        persistReducer(rootPersistConfig, nextRootReducer),
      );
    });
  }

  return { store, persistor };
}
