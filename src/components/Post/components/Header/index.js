import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../../../../components/ProfilePicture';

const Header = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text>{name}</Text>
    </View>
  );
};

export default Header;
