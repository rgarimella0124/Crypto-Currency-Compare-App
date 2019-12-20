import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './src/redux';
import List from './src/screens/list';
import Add from './src/screens/add';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// Type navigation object that's being passed to every screen by react-navigation
export type Navigation = {
  navigate: (screen: string, params?: Object) => void,
  goBack: () => void,
  state: {
    routeName: string,
    params?: Object,
  },
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// Configure navigation
const Screens = createStackNavigator(
  {
    list: {screen: List}, // list with the chart
    add: {screen: Add}, // add new coin screen
  },
  {
    mode: 'modal', // Add screen slides up from the bottom
    headerMode: 'none', // disable headers
  },
);

const AppContainer = createAppContainer(Screens);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
