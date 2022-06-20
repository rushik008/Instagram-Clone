import React from 'react';
import {View} from 'react-native';

// importing screens
import SearchBox from '../../components/DiscoveryComponents/SearchBox';

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
