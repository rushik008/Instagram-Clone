import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importing screens
import HomeScreen from '../../../screens/HomeScreen';
import DiscoveryScreen from '../../../screens/DiscoveryScreen';
import ReelsScreen from '../../../screens/ReelsScreen';
import NotificationScreen from '../../../screens/NotificationScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import HomeStackScreen from '../HomeStack';

// importing various icons
import HomeIconFocused from 'react-native-vector-icons/Foundation';
import HomeIconOutline from 'react-native-vector-icons/Octicons';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeScreen}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => {
            // Home icon for Home Screen from Foundation and Octicons respectively
            if (route.name === 'HomeScreen') {
              return focused ? (
                <HomeIconFocused name="home" size={32} color="black" />
              ) : (
                <HomeIconOutline name="home" size={25} color="black" />
              );
            }

            // Search icon for Discovery Screen from Ionicons
            else if (route.name === 'Discovery') {
              return focused ? (
                <Ionicon name="md-search-sharp" size={32} color="black" />
              ) : (
                <Ionicon name="md-search-outline" size={32} color="black" />
              );
            }

            // Play icon for Reels Screen from Ionicons
            else if (route.name === 'Reels') {
              return focused ? (
                <Ionicon name="play-sharp" size={32} color="black" />
              ) : (
                <Ionicon name="play-outline" size={32} color="black" />
              );
            }

            // Heart icon for Notification Screen from MaterialCommunityIcons
            else if (route.name === 'Notification') {
              return focused ? (
                <HeartIcon name="cards-heart" size={32} color="black" />
              ) : (
                <HeartIcon name="cards-heart-outline" size={32} color="black" />
              );
            }

            // Profile icon for Profile Screen from Ionicons
            else if (route.name === 'Profile') {
              return focused ? (
                <Ionicon name="person" size={30} color="black" />
              ) : (
                <Ionicon name="person-outline" size={30} color="black" />
              );
            }
          },
        })}>
        <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
