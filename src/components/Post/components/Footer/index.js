import React from 'react';
import {View, Text} from 'react-native';
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/Ionicons';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import BookmarkIcon from 'react-native-vector-icons/Feather';

import styles from './style';

const Footer = ({likesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <HeartIcon
            style={styles.heartIcon}
            name="cards-heart-outline"
            size={36}
            color="black"
          />
          <CommentIcon
            style={styles.commentIcon}
            name="chatbubble-outline"
            size={32}
            color="black"
          />
          <ShareIcon
            style={styles.shareIcon}
            name="paper-plane-outline"
            size={33}
            color="black"
          />
        </View>

        <View style={styles.rightIcons}>
          <BookmarkIcon name="bookmark" size={35} color="black" />
        </View>
      </View>

      <View>
        <Text style={styles.likes}> {likesCount} Likes</Text>
        <Text style={styles.caption}> {caption}</Text>
        <Text style={styles.postedAt}> {postedAt}</Text>
      </View>
    </View>
  );
};

export default Footer;
