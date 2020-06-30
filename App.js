import React, {Component} from 'react';
import {Provider} from 'react-redux';
import MasterNavigator from './src/navigations';
import configureStore from './src/redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <MasterNavigator />
      </Provider>
    );
  }
}
