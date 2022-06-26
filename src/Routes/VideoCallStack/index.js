import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// importing screens
import VideoCallScreen from '../../screens/VideoCall';

const VideoCallStack = createStackNavigator();

const VideoCallStackScreen = () => {
  return (
    <VideoCallStack.Navigator>
      <VideoCallStack.Screen
        name="Video Call Stack"
        component={VideoCallScreen}
      />
    </VideoCallStack.Navigator>
  );
};

export default VideoCallStackScreen;
