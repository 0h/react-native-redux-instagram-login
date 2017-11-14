import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-native";
import { NavigationActions } from "react-navigation";

const LoginButton = ({ loginScreen }) => (
  <Button onPress={loginScreen} title="Login with Instagram" />
);

LoginButton.propTypes = {
  loginScreen: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Login" }))
});

export default connect(null, mapDispatchToProps)(LoginButton);
