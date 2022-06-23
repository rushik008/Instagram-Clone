import React from 'react';
import {FlatList} from 'react-native';

// importing screens
import UserStory from '../UserStory';

// importing data
import storiesData from '../../data/stories';

// importing styles
import styles from './style';

const UserStories = () => {
  return (
    <FlatList
      style={styles.container}
      data={storiesData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <UserStory story={item} />}
    />
  );
};

export default UserStories;
