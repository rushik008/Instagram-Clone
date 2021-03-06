import React from 'react';
import {View, Text} from 'react-native';

// importing screens
import ProfilePicture from '../../ProfilePicture';

// importing icons
import SettingIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <ProfilePicture uri={imageUri} size={38} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.rightContent}>
        <SettingIcon name="dots-vertical" size={20} color="black" />
      </View>
    </View>
  );
};

export default Header;
