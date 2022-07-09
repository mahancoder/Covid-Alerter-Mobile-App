import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Appearance} from 'react-native';
import store from './store';
import {Provider, connect} from 'react-redux';
import {empty, set} from './authSlice';
import {useSelector, useDispatch} from 'react-redux';
import SignIn from './GoogleSignIn';

var dark = false;
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  dark = true;
}

const App = () => {
  const sessionId = useSelector(state => state.auth.sessionId);
  const dispatch = useDispatch();
  const rend = !sessionId ? <SignIn /> : <Text>{sessionId}</Text>;
  return rend;
};

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
