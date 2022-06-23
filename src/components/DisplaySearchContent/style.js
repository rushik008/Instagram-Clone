import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  discoveryImage: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    margin: 1,
  },
});

export default styles;
