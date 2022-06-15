import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 8,
  },

  leftContent: {
    flexDirection: 'row',
  },

  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
