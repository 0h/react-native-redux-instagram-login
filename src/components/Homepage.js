import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import LogoutButton from "./LogoutButton";

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const Homepage = ({ dispatch }) => {
  return (
    <View>
      <Text style={styles.welcome}>{'You are "logged in" right now'}</Text>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: "Profile" }))}
        title="Profile"
      />
      <LogoutButton />
    </View>
  );
};

Homepage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Homepage);
