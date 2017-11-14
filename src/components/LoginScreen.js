import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, StyleSheet, Text, View, WebView } from "react-native";
import qs from "qs";

const clientId = "CLIENT_ID";
const redirectUrl = "https://google.com/";
const scopes = ["public_content+follower_list"];

_onNavigationStateChange = (webViewState, props) => {
  const { url } = webViewState;
  if (url && url.startsWith(redirectUrl)) {
    const match = url.match(/#(.*)/);
    if (match && match[1]) {
      const params = qs.parse(match[1]);
      if (params.access_token) {
        props.onLogin(params.access_token);
        props.navigation.navigate("Main");
      }
    } else {
      props.navigation.goBack();
    }
  }
};

const LoginScreen = props => (
  <WebView
    source={{
      uri: `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scopes.join(
        "+"
      )}`
    }}
    scalesPageToFit
    startInLoadingState
    onNavigationStateChange={navEvent =>
      this._onNavigationStateChange(navEvent, props)}
    onError={navEvent => this._onNavigationStateChange(navEvent)}
  />
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
  title: "Log In"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onLogin: token => {
    dispatch({ type: "Login", token: token });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
