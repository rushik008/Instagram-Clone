import React from 'react';
import {View, Text} from 'react-native';

// importing screens
import UserProfileImage from '../../components/Profile/UserProfileImage';
import UserDetails from '../../components/Profile/UserDetails';
import EditProfile from '../../components/Profile/EditProfile';

// importing data
import userData from '../../data/user';

// importing styles
import styles from './style';

const ProfileScreen = () => {
  // destructuring the object
  const {name, userProfile, noPosts, noFollowers, noFollowing} = userData;

  return (
    <View style={styles.container}>
      {/* upperContainer containes user's profile image, name and social details. */}
      <View style={styles.upperContainer}>
        <View style={styles.leftContainer}>
          <UserProfileImage userProfile={userProfile} />
          <Text style={styles.name}>{name}</Text>
        </View>

        <UserDetails
          noPosts={noPosts}
          noFollowers={noFollowers}
          noFollowing={noFollowing}
        />
      </View>

      <EditProfile />
    </View>
  );
};

export default ProfileScreen;
