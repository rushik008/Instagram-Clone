import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// importing screens
import BottomTabNavigation from './BottomTabNavigation';
import AddPersonToMessageScreen from '../screens/AddPersonToMessage';
import StoryScreen from '../screens/StoryScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

import ChatStackScreen from './ChatStackScreen';
import AddPostStackScreen from './AddPostStack';

const RootStackScreen = () => {
  
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root Stack"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Chat Stack"
          component={ChatStackScreen}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Add Person To Message Stack"
          component={AddPersonToMessageScreen}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Story Stack"
          component={StoryScreen}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Add Post Stack"
          component={AddPostStackScreen}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Edit Profile Stack"
          component={EditProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

{
  /* <RootStack.Screen
          name="Chat Stack"
          component={ChatScreen}
          options={{
            headerTitle: 'rushik_rathod_',
            headerRight: () => {
              return (
                // View for right aligned 2 icons of top bar
                <View style={styles.rightIcons}>
                <VideoIcon
                name="video-plus-outline"
                    size={32}
                    color="black"
                  />
                  <PlusIcon name="plus" size={30} color="black" />
                </View>
                );
            },
          }}
        /> */
}
