import React from 'react';
import {View} from 'react-native';

import SearchBox from '../../components/SearchBox';

// importing style
import styles from './style';

const DiscoveryScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBox />
    </View>
  );
};

export default DiscoveryScreen;
