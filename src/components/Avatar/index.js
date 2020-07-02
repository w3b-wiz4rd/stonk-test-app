import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Avatar = ({title, avatar}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#c94b4b', '#4b134f']}
        style={styles.avatarContainer}>
        <Image style={styles.avatar} source={avatar} />
      </LinearGradient>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    position: 'relative',
    marginBottom: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  title: {
    color: 'white',
    fontSize: 12,
  },
});

export default Avatar;
