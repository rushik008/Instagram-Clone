import React from 'react';
import {View, Text} from 'react-native';

// importing styles
import styles from './style';

const UserDetails = ({noPosts, noFollowers, noFollowing}) => {
  return (
    <View style={styles.container}>
      <View style={styles.singleContainer}>
        <Text style={styles.number}>{noPosts}</Text>
        <Text style={styles.text}>Posts</Text>
      </View>

      <View style={styles.singleContainer}>
        <Text style={styles.number}>{noFollowers}</Text>
        <Text style={styles.text}>Followers</Text>
      </View>

      <View style={styles.singleContainer}>
        <Text style={styles.number}>{noFollowing}</Text>
        <Text style={styles.text}>Following</Text>
      </View>
    </View>
  );
};

export default UserDetails;
