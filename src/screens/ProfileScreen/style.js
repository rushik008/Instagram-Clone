import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },

  upperContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  leftContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  name: {
    paddingTop: 12,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
