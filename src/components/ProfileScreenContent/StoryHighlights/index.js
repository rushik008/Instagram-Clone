import React from 'react';
import {View, Text} from 'react-native';

// importing styles
import styles from './style';
import DownArrow from 'react-native-vector-icons/Ionicons';

const StoryHighlights = () => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>Story highlights</Text>

      <DownArrow name="md-chevron-down" size={15} color="black" />
    </View>
  );
};

export default StoryHighlights;
