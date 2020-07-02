import React from 'react';
import {View} from 'react-native';
/* Navigations */
import MainNavigator from './src/navigation/MainNavigator';

const App = () => (
  <View style={{flex: 1}}>
    <MainNavigator />
  </View>
);

export default App;
