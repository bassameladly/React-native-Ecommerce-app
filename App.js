import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './screens/AppNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cartItems from './reducers/CartItems';

let store = createStore(cartItems);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;
