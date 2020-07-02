import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

const User = () => {
  const scale = new Animated.Value(0);
  const opacity = new Animated.Value(1);

  const onPress = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 7,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      scale.setValue(0);
      opacity.setValue(1);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View
          style={{
            ...styles.animationStyles,
            opacity,
            transform: [
              {
                scale,
              },
            ],
          }}></Animated.View>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <Image
            style={styles.star}
            source={require('../../assets/star.png')}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.starText}>12.7k</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    position: 'relative',
  },

  animationStyles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bc8a4d',
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  starText: {
    color: '#bc8a4d',
    fontSize: 12,
    fontWeight: 'bold',
  },
  star: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default User;
