import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentIcon from 'react-native-vector-icons/Ionicons';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import BookmarkIcon from 'react-native-vector-icons/Feather';

import styles from './style';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const isLikedHandler = () => {
    setIsLiked(!isLiked);
    {
      isLiked
        ? setLikesCount(Number(likesCount) - 1)
        : setLikesCount(Number(likesCount) + 1);
    }
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <Pressable onPress={isLikedHandler}>
            {isLiked ? (
              <HeartIcon name="cards-heart" size={36} color="red" />
            ) : (
              <HeartIcon name="cards-heart-outline" size={36} color="black" />
            )}
          </Pressable>

          <CommentIcon st name="chatbubble-outline" size={32} color="black" />
          <ShareIcon name="paper-plane-outline" size={33} color="black" />
        </View>

        <View>
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
