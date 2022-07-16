import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

// importing screens
import ChatScreen from '../../screens/ChatScreen';
import VideoCallScreen from '../../screens/VideoCallScreen';

// importing icons
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// importing styles
import styles from './style';

// importing data
import userData from '../../data/user';

const ChatStackScreen = () => {
  const ChatStack = createStackNavigator();

  const navigation = useNavigation();

  // destructuring the object
  const {userName} = userData;

  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name={'Chat Stack 1'}
        component={ChatScreen}
        options={{
          headerTitle: () => {
            return <Text style={styles.textStyle}>{userName}</Text>;
          },
          headerRight: () => {
            return (
              // View for right aligned 2 icons of top bar
              <View style={styles.rightIcons}>
                <VideoIcon
                  name="video-plus-outline"
                  size={28}
                  color="black"
                  onPress={() => navigation.navigate('Video Call Stack')}
                />
                <PlusIcon
                  name="plus"
                  size={28}
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
