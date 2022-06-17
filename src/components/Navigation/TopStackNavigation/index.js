import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';

// importing screens
import HomeScreen from '../../../screens/HomeScreen';

// importing icons
import PlusIcon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

// importing styles
import styles from './style';
import logo from '../../../assets/images/logo/instagram.png';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen

        name="Home Instagram"
        component={HomeScreen}
        options={{
          title: 'Instagram',

          headerTitle: () => {
            return <Image source={logo} style={styles.image} />;
          },

          headerRight: () => {
            return (
              // View for right aligned 2 icons of top bar
              <View style={styles.rightIcons}>
                <PlusIcon name="plus-square" size={30} color="black" />
                <Ionicon name="paper-plane-outline" size={30} color="black" />
              </View>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
