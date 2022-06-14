import React from 'react';
import {Text, View} from 'react-native';

import Stories from '../../components/Stories';
import Feed from '../../components/Feed';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Stories />
      <Feed />
    </View>
  );
};

export default HomeScreen;
