import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
/* Components */
import Avatar from '../../components/Avatar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Feed',
    avatar: require('../../assets/avatars/avatar_1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '$1k Contest',
    avatar: require('../../assets/avatars/wizard.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ninja',
    avatar: require('../../assets/avatars/ninja.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'pokimane',
    avatar: require('../../assets/avatars/avatar_3.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'DrLupo',
    avatar: require('../../assets/avatars/avatar_4.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'KingRise',
    avatar: require('../../assets/avatars/avatar_5.jpg'),
  },
];

const Users = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => (
          <Avatar title={item.title} avatar={item.avatar} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

export default Users;
