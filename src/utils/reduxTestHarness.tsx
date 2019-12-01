import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store';
import {initialState as rootReducerInitialState} from '../reducers/rootReducer';

export function ReduxTestHarness(component: React.ReactNode, initialState = rootReducerInitialState) {
  const store = configureStore(initialState);
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
};

