import React from 'react';
import {View, Text} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
