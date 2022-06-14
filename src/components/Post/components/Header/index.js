import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../../../../components/ProfilePicture';
import styles from './style';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={38} />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;
