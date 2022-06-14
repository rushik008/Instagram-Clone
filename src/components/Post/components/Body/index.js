import React from 'react';
import {View, Image} from 'react-native';

import styles from './style';

const Body = ({imagePostUri}) => {
  return (
    <View>
      <Image source={{uri: imagePostUri}} style={styles.image} />
    </View>
  );
};

export default Body;
