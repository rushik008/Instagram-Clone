import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

// importing screens
import ChatScreen from '../../../screens/ChatScreen';

// importing icons
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import VideoCallScreen from '../../../screens/VideoCall';

const ChatStackScreen = () => {
  const ChatStack = createStackNavigator();

  const navigation = useNavigation();
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name={'Chat Stack 1'}
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
                  onPress={() => navigation.navigate('Video Call Stack')}
                />
                <PlusIcon
                  name="plus"
                  size={30}
                  color="black"
                  onPress={() =>
                    navigation.navigate('Add Person To Message Stack')
                  }
                />
              </View>
            );
          },
        }}
      />

      <ChatStack.Screen
        name="Video Call Stack"
        component={VideoCallScreen}
        options={{
          headerShown: false,
        }}
      />
    </ChatStack.Navigator>
  );
};

export default ChatStackScreen;
