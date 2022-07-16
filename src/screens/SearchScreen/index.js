import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';

// importing screens
import SearchBox from '../../components/SearchBox';
import DisplaySearchContent from '../../components/DisplaySearchContent';

// importing data
import searchData from '../../data/search';

// importing style
import styles from './style';
import PlusIcon from 'react-native-vector-icons/EvilIcons';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* <SearchBox /> */}

      <FlatList
        numColumns={3}
        data={searchData}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<SearchBox />}
        renderItem={({item}) => (
          <DisplaySearchContent oneImage={item} />
        )}></FlatList>

      {/* <PlusIcon name="plus" size={30} /> */}
    </View>
  );
};

export default SearchScreen;
