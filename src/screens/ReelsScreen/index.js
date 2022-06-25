import React from 'react';
import {View, ImageBackground} from 'react-native';

// importing icons
import CameraIcon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/Ionicons';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import SettingIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const image = {
  uri: 'https://images.unsplash.com/photo-1590099914662-a76f2f83b802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8OSUzQTE2fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
};

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />

      {/* <CameraIcon name="camera" size={36} color="white" />
      <HeartIcon name="cards-heart-outline" size={36} color="white" />
      <CommentIcon name="chatbubble-outline" size={32} color="white" />
      <ShareIcon name="paper-plane-outline" size={33} color="white" />
      <SettingIcon name="dots-vertical" size={33} color="white" /> */}
    </View>
  );
};

export default ReelsScreen;
