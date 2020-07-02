import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Comments = ({user, comment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Comments;
