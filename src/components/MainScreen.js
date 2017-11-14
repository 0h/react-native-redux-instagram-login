import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginButton from "./LoginButton";
import Homepage from "./Homepage";

const MainScreen = ({ isLoggedIn }) =>
  !isLoggedIn ? (
    <View style={styles.container}>
      <LoginButton />
    </View>
  ) : (
    <View style={styles.container}>
      <Homepage />
    </View>
  );

MainScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

MainScreen.navigationOptions = {
  title: "Back"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(MainScreen);
