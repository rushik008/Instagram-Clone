import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

// importing icons
import SearchIcon from 'react-native-vector-icons/Ionicons';

//importing styles
import styles from './style';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <SearchIcon name="search" style={styles.searchIconStyle} />
      <TextInput placeholder="Search" style={styles.textInputStyle} />
    </View>
  );
};

export default ChatScreen;