import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const ProfilePicture = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri}} />
    </View>
  );
};

export default ProfilePicture;
