import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
/* Screens */
import Home from '../screens/Home';
import Account from '../screens/Account';
import Search from '../screens/Search';
import List from '../screens/List';

/* Utils */
import theme from '../constants/theme';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name="logo-youtube" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="ios-list" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="md-search" size={25} color={tabInfo.tintColor} />;
        },
      },
    },

    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="md-person" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: theme.navigation.tabIconActive,
      inactiveTintColor: theme.navigation.tabIconInactive,
      activeBackgroundColor: theme.navigation.background,
      inactiveBackgroundColor: theme.navigation.background,
      showLabel: false,
      shadowOffset: {
        height: 0,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
