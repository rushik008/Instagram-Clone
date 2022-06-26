import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 20,
  },

  pressableButton: {
    padding: 5,
    borderRadius: 10,
    width: '95%',
    backgroundColor: 'gainsboro',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },

  discoverPeopleIcon: {
    color: 'black',
    padding: 8,
    borderRadius: 10,
    marginLeft: 5,
    backgroundColor: 'gainsboro',
  },
});

export default styles;
