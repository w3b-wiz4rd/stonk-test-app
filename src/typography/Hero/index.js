import React from 'react';
import {Text, StyleSheet} from 'react-native';
/* Utils */
import theme from '../../constants/theme';

const Hero = ({style, children}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: theme.typography.color.main,
    fontSize: 34,
    fontWeight: 'bold',
    margin: 0,
  },
});

export default Hero;
