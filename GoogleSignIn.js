import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Text, View, Button, StyleSheet, Appearance} from 'react-native';
import {empty, set} from './authSlice';
import {useSelector, useDispatch} from 'react-redux';

GoogleSignin.configure({
  offlineAccess: false,
  webClientId:
    '1055192154575-knhg62p3a7jpo8sarnjvvvqhlplrfko2.apps.googleusercontent.com',
});

const SignIn = props => {
  const sessionId = useSelector(state => state.auth.sessionId);
  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(set(userInfo.idToken));
    } catch (error) {}
  };

  return (
    <GoogleSigninButton
      style={styles.SignInButton}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  );
};

const styles = StyleSheet.create({
  SignInButton: {
    width: 300,
    height: 50
  }
});

export default SignIn;
