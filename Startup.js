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
import reducer from "./app/reducers"

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

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

const store = configureStore({});

import 
{
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select(
  {
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  });

export const Startup = () =>
(
  <Provider store = {store}>
    <AppContainer />
  </Provider>
); 
