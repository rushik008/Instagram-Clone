import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// importing screens
import BottomTabNavigation from './BottomTabNavigation';
import ChatScreen from '../../screens/ChatScreen';
import StoryScreen from '../../screens/StoryScreen';

// importing icons
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// importing styles
import styles from './style';

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
        />

        <RootStack.Screen
          name="Story Stack"
          component={StoryScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
