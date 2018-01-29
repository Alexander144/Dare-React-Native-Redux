/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from "../app/reducers";
import AppContainer from "../app/containers/AppContainer";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const store = configureStore({});

function configureStore(initialState)
{
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

export default Startup = () =>
(
  <Provider store = {store}>
    <AppContainer />
  </Provider>
); 
