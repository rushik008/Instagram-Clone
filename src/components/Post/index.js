import React from 'react';
import {View} from 'react-native';

import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

const Post = ({post: {user}}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      {/* <Body />
      <Footer /> */}
    </View>
  );
};

export default Post;
