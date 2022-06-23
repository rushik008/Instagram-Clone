import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';

// importing screens
import HomeScreen from '../../../screens/HomeScreen';

// importing icons
import PlusIconSquare from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

// importing styles
import styles from './style';
import logo from '../../../assets/images/logo/instagram.png';

const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator>
      {/* Home Stack for Home Screen */}
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: 'Instagram',
          headerTitle: () => {
            return <Image source={logo} style={styles.image} />;
          },

          headerRight: () => {
            return (
              // View for right aligned 2 icons of top bar
              <View style={styles.rightIcons}>
                <PlusIconSquare
                  name="plus-square"
                  size={30}
                  color="black"
                  onPress={() => navigation.navigate('Add Post Stack')}
                />
                <Ionicon
                  name="paper-plane-outline"
                  size={30}
                  color="black"
                  // calling chat stack which is define in the root stack screen
                  // as we don't want to show bottom navigation bar
                  onPress={() => navigation.navigate('Chat Stack')}
                />
              </View>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
