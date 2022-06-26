import React from 'react';
import {View, Image} from 'react-native';

import styles from './style';

const UserProfileImage = ({userProfile}) => {
  return (
    <View>
      <Image source={{uri: userProfile}} style={styles.image} />
    </View>
  );
};

export default UserProfileImage;
