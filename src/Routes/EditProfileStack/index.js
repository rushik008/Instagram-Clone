import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// importing screens
import EditProfileScreen from '../../screens/EditProfileScreen';

const EditProfileStackScreen = () => {
  const EditProfileStack = createStackNavigator();

  return (
    <EditProfileStack.Navigator>
      <EditProfileStack.Screen
        name="Edit Profile Stack"
        component={EditProfileScreen}
      />
    </EditProfileStack.Navigator>
  );
};

export default EditProfileStackScreen;
