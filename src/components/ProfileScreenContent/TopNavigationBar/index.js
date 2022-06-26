import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// importing screens
import UserPosts from '../UserPosts';
import UserReels from '../UserReels';
import UserVideos from '../UserReels';
import UserTags from '../UserTags';

const Tab = createMaterialTopTabNavigator();

const TopNavigationBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserPosts" component={UserPosts} />
      <Tab.Screen name="UserReels" component={UserReels} />
      <Tab.Screen name="UserVideos" component={UserVideos} />
      <Tab.Screen name="UserTags" component={UserTags} />
    </Tab.Navigator>
  );
};

export default TopNavigationBar;
