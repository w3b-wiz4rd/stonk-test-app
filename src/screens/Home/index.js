import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
/* Components */
import Avatar from '../../components/Avatar';
import Stream from '../../components/Stream';
import Comments from '../../components/Comments';
import Users from '../../components/Users';
import User from '../../components/User';
/* Utils */
import theme from '../../constants/theme';

const Home = () => {
  return (
    <View style={styles.container}>
      <Users />
      <Stream />
      <Comments />
      <User />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

export default Home;
