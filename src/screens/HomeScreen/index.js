import React from 'react';
import {Text, View} from 'react-native';

import Stories from '../../components/Stories';
import Post from '../../components/Post';

const post = {
  user: {
    imageUri:
      'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
    name: 'johny_depp',
  },
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Stories />
      <Post post={post} />
    </View>
  );
};

export default HomeScreen;
