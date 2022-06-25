import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    width: Dimensions.get('window').width,
  },

  pressableButton: {
    padding: 5,
    borderRadius: 10,
    width: '85%',
    backgroundColor: 'gainsboro',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  discoverPeopleIcon: {
    color: 'black',
    padding: 5,
    borderRadius: 10,
    margin: 8,
    backgroundColor: 'gainsboro',
  },
});

export default styles;
