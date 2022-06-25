import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// importing styles
import styles from './style';
import DiscoverPeopleIcon from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableButton}
        onPress={() => navigation.navigate('Edit Profile Stack')}>
        <Text style={styles.text}>Edit profile</Text>
      </Pressable>

      <DiscoverPeopleIcon
        style={styles.discoverPeopleIcon}
        name="person-add-outline"
        size={18}
      />
    </View>
  );
};

export default EditProfile;
