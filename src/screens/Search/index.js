import React from 'react';
import {View, StyleSheet} from 'react-native';
/* Typography */
import Hero from '../../typography/Hero';
/* Utils */
import theme from '../../constants/theme';

const Search = () => {
  return (
    <View style={styles.container}>
      <Hero>Promise it will be done soon...</Hero>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
