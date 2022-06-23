import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// importing screens
import ProfilePicture from '../ProfilePicture';

import styles from './style';

const UserStory = props => {
  const {
    story: {
      user: {imageUri, name},
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story Stack');
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default UserStory;
