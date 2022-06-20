import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';

// importing screens
import HomeScreen from '../../../screens/HomeScreen';
import ChatScreen from '../../../screens/ChatScreen';

// importing icons
import PlusIconSquare from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import VideoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// importing styles
import styles from './style';
import logo from '../../../assets/images/logo/instagram.png';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
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
                <PlusIconSquare name="plus-square" size={30} color="black" />
                <Ionicon
                  name="paper-plane-outline"
                  size={30}
                  color="black"
                  onPress={() => navigation.navigate('Chat Stack')}
                />
              </View>
            );
          },
        }}
      />

      {/* Home Stack for Chat Screen */}
      <HomeStack.Screen
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
                  // onPress={() => navigation.navigate('Video Stack')}
                />
                <PlusIcon
                  name="plus"
                  size={30}
                  color="black"
                  // onPress={() => navigation.navigate('Add Person To Message Stack')}
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
