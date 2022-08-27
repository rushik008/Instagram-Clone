import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importing screens
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import NotificationScreen from '../../screens/NotificationScreen';

import ReelsStackScreen from '../ReelsStackScreen';
import ProfileStackScreen from '../ProfileStackScreen';
import HomeStackScreen from '../HomeStack';

// importing various icons
import HomeIconFocused from 'react-native-vector-icons/Foundation';
import HomeIconOutline from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,

        tabBarIcon: ({focused}) => {
          // HOME ICON
          if (route.name === 'HomeScreen') {
            return focused ? (
              <HomeIconFocused name="home" size={25} color="black" />
            ) : (
              <HomeIconOutline name="home" size={20} color="black" />
            );
          }

          // SEARCH ICON
          else if (route.name === 'SearchScreen') {
            return focused ? (
              <Ionicon name="md-search" size={25} color="black" />
            ) : (
              <Ionicon name="md-search-outline" size={25} color="black" />
            );
          }

          // PLAY ICON
          else if (route.name === 'Reels') {
            return focused ? (
              <Ionicon name="play" size={25} color="black" />
            ) : (
              <Ionicon name="play-outline" size={25} color="black" />
            );
          }

          // HEART ICON
          else if (route.name === 'Notification') {
            return focused ? (
              <Ionicon name="heart" size={25} color="black" />
            ) : (
              <Ionicon name="heart-outline" size={25} color="black" />
            );
          }

          // PROFILE ICON
          else if (route.name === 'Profile') {
            return focused ? (
              <Ionicon name="person" size={20} color="black" />
            ) : (
              <Ionicon name="person-outline" size={20} color="black" />
            );
          }
        },
      })}>
        
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
