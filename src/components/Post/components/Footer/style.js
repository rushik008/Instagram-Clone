import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  leftIcons: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },

  likes: {
    fontWeight: 'bold',
    margin: 3,
    color: 'black',
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    margin: 3,
  },
});

export default styles;
