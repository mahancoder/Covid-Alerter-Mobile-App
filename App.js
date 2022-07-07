import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Appearance} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1055192154575-knhg62p3a7jpo8sarnjvvvqhlplrfko2.apps.googleusercontent.com',
  offlineAccess: false,
});

var dark = false;
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  dark = true;
}

class App extends Component {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
      this.setState({isLoggedIn: true});
    } catch (error) {
      this.setState({userInfo: {idToken: error.code}, isLoggedIn: true});
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      this.setState({userInfo: null});
      this.setState({isLoggedIn: false});
    } catch (error) {
      console.error(error);
    }
  };
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }
  render() {
    return (
      <View style={styles.root}>
        {!this.state.isLoggedIn && (
          <View style={styles.signInPage}>
            <GoogleSigninButton
              style={styles.signInButton}
              size={GoogleSigninButton.Size.Wide}
              color={
                dark
                  ? GoogleSigninButton.Color.Dark
                  : GoogleSigninButton.Color.Light
              }
              onPress={this.signIn}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  signInPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButton: {
    width: 292,
    height: 48,
  },
});
export default App;
