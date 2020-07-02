import React from 'react';
import {View, StyleSheet} from 'react-native';
/* Typography */
import Hero from '../../typography/Hero';
/* Utils */
import theme from '../../constants/theme';

const List = () => {
  return (
    <View style={styles.container}>
      <Hero>Still working ...</Hero>
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

export default List;
