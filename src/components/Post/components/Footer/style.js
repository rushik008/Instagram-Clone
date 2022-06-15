import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heartIcon: {
    marginHorizontal: 5,
  },
  commentIcon: {
    marginHorizontal: 5,
  },
  shareIcon: {
    marginHorizontal: 5,
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
