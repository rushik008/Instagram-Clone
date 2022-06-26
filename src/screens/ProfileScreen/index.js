import React from 'react';
import {View, Text} from 'react-native';

// importing screens
import UserProfileImage from '../../components/ProfileScreenContent/UserProfileImage';
import UserDetails from '../../components/ProfileScreenContent/UserDetails';
import EditProfile from '../../components/ProfileScreenContent/EditProfile';
import StoryHighlights from '../../components/ProfileScreenContent/StoryHighlights';
import TopNavigationBar from '../../components/ProfileScreenContent/TopNavigationBar';

// importing data
import userData from '../../data/user';

// importing styles
import styles from './style';

const ProfileScreen = () => {
  // destructuring the object
  const {name, userProfile, noPosts, noFollowers, noFollowing} = userData;

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* upperContainer containes user's profile image, name and social details. */}

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
      <StoryHighlights />
      <TopNavigationBar />
    </View>
  );
};

export default ProfileScreen;
