import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './configureStore';
import App from './App';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store} loading>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
