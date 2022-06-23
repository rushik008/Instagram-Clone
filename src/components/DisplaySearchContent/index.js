import React from 'react';
import {View, Image} from 'react-native';

// importing styles
import styles from './style';

const DisplaySearchContent = ({oneImage}) => {
  return (
    <View>
      <Image
        style={styles.discoveryImage}
        source={{uri: oneImage.discoveryImage}}
      />
    </View>
  );
};

export default DisplaySearchContent;
