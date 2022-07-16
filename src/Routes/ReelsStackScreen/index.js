import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// importing screens
import ReelsScreen from '../../screens/ReelsScreen';

const ReelsStackScreen = () => {
  const ReelsStack = createStackNavigator();

  return (
    <ReelsStack.Navigator>
      <ReelsStack.Screen
        name="Reels Stack"
        component={ReelsScreen}
        options={{
          headerShown: false,
        }}
      />
    </ReelsStack.Navigator>
  );
};

export default ReelsStackScreen;
