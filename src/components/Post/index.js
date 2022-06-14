import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imagePostUri={post.imagePostUri} />
      <Footer
        caption={post.caption}
        likesCount={post.likesCount}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
