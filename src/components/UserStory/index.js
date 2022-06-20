import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// importing screens
import ProfilePicture from '../ProfilePicture';

import styles from './style';

const UserStory = ({imageUri, name}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Story Stack')}>
      <View>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default UserStory;
