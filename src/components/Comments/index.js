import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
/* Components*/
import Comment from './Comment';

const comments = [
  {user: 'drg5', comment: 'Just liked this 100 times!'},
  {user: 'ninja', comment: '⚔ ⚔ ⚔ ⚔'},
  {user: 'yuieroo', comment: 'how do you even do that? 🔥🔥🔥'},
  {user: 'picachU', comment: '🦁 🦁 🦁 🦁'},
  {user: 'drg5', comment: '💣 💣 💣'},
  {user: 'drg5', comment: 'And here we go again ....'},
];

const Comments = () => {
  return (
    <ScrollView style={styles.container}>
      {comments.map((comment) => (
        <Comment user={comment.user} comment={comment.comment} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default Comments;
