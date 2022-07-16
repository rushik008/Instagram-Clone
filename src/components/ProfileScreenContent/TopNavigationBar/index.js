import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// importing screens
import UserPosts from '../UserPosts';
import UserReels from '../UserReels';
import UserVideos from '../UserReels';
import UserTags from '../UserTags';

// importing icons
import GridIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayIcon from 'react-native-vector-icons/Ionicons';

// importing logo
import ReelsLogo from '../../../assets/images/logo/reels.png';
import TagLogo from '../../../assets/images/logo/tag.png';

// importing style
import styles from './style';

const Tab = createMaterialTopTabNavigator();

const TopNavigationBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={UserPosts}
        options={{
          title: () => {
            return <GridIcon name="grid" size={20} color="black" />;
          },
        }}
      />

      <Tab.Screen
        name="Reels"
        component={UserReels}
        options={{
          title: () => {
            return <Image source={ReelsLogo} style={styles.image} />;
          },
        }}
      />

      <Tab.Screen
        name="Videos"
        component={UserVideos}
        options={{
          title: () => {
            return <PlayIcon name="play-outline" size={25} color="black" />;
          },
        }}
      />

      <Tab.Screen
        name="Tags"
        component={UserTags}
        options={{
          title: () => {
            return <Image source={TagLogo} style={styles.image} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TopNavigationBar;
