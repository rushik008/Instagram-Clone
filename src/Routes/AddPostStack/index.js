import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// importing screens
import AddPostScreen from '../../screens/AddPostScreen';

const AddPostStackScreen = () => {
  const AddPostStack = createStackNavigator();

  return (
    <AddPostStack.Navigator>
      <AddPostStack.Screen
        name="Add Post Stack 1"
        component={AddPostScreen}
        options={{headerShown: false}}
      />
    </AddPostStack.Navigator>
  );
};

export default AddPostStackScreen;
