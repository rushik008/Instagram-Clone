import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './style';
// importing icons
import SearchIcon from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <SearchIcon name="search" style={styles.searchIconStyle} />
      <TextInput placeholder="Search" style={styles.textInputStyle} />
    </View>
  );
};

export default SearchBox;
