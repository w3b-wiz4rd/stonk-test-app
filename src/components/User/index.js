import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
/* Icons */
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
/* Components */
import Star from '../Star';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <LinearGradient
          colors={['#c94b4b', '#4b134f']}
          style={styles.avatarBorder}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatars/wizard.png')}
          />
        </LinearGradient>
        <View style={{marginLeft: 10}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Ninja</Text>
            <Octicon name="verified" size={15} color="white" />
          </View>

          <Text style={styles.followers}>8.9k Followers</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Ionicon name="md-share" size={25} color="#bdc2c4" />
          <Text style={styles.actionText}>Share</Text>
        </View>
        <View style={styles.action}>
          <MIcon name="comment" size={25} color="#bdc2c4" />
          <Text style={styles.actionText}>102</Text>
        </View>
        <Star />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  user: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  comment: {
    color: '#bcc1c3',
    fontSize: 15,
    marginLeft: 15,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatarBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    position: 'relative',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  actionText: {
    color: '#bcc1c3',
    fontSize: 14,
  },
  followers: {
    color: '#bcc1c3',
    fontSize: 14,
  },
});

export default User;
