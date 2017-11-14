import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import cookies from "react-native-cookies";

import { AppNavigator } from "../navigators/AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams("Login");
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams("Main");
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "Login":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case "Logout":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Main" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = {
  isLoggedIn: false,
  token: null
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        isLoggedIn: true,
        token: action.token
      };
    case "Logout":
      cookies.clearAll();
      return {
        ...state,
        isLoggedIn: false,
        token: null
      };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth
});

export default AppReducer;
