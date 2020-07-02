import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Stream = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>NYC was fun but I'm back!</Text>
          <Text style={styles.views}>32.1k views Jinjuh clipped 5h ago</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicon name="ellipsis-h" size={20} color="#bdc2c4" />
          <View style={styles.badge}>
            <Icon name="stars" size={20} color="#bc8a4d" />
            <Text style={styles.followers}>1.3k</Text>
          </View>
        </View>
      </View>
      <View style={styles.streamContainer}>
        <Image
          style={styles.stream}
          source={require('../../assets/stream.jpg')}
        />
        <View style={styles.detail}>
          <View>
            <Text style={styles.rank}>#12 in Today's Top Clip Contest</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.prize}>$1k Prize Pool</Text>
              <Text style={styles.time}>34h 45m 32s</Text>
              <Text style={styles.entries}>1,029 Entries</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streamContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  stream: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  views: {
    color: '#bcc1c3',
    fontSize: 14,
  },
  detail: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(52,61,65,0.9)',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  prize: {
    color: '#bc8a4d',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  time: {
    color: '#bcc1c3',
    fontSize: 14,
    marginRight: 10,
  },
  entries: {
    color: '#bcc1c3',
    fontSize: 14,
  },
  followers: {
    color: '#bc8a4d',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  badge: {
    backgroundColor: 'rgba(51,53,50,0.8)',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
});

export default Stream;
