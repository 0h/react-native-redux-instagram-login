import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-native";
import { NavigationActions } from "react-navigation";

const LogoutButton = ({ logout }) => <Button onPress={logout} title="Logout" />;

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "Logout" })
});

export default connect(null, mapDispatchToProps)(LogoutButton);
