import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

// importing icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// importing styles
import styles from './style';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const isLikedHandler = () => {
    setIsLiked(!isLiked);
    {
      isLiked
        ? setLikesCount(Number(likesCount) - 1)
        : setLikesCount(Number(likesCount) + 1);
    }
  };

  const isBookmarkedHandler = () => {
    setIsBookmarked(!isBookmarked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Left icon container */}
        <View style={styles.leftIcons}>
          <Pressable onPress={isLikedHandler}>
            {/* Changing heart icon according to the like and dislike */}
            {isLiked ? (
              <Ionicons name="heart" size={28} color="red" />
            ) : (
              <Ionicons name="heart-outline" size={28} color="black" />
            )}
          </Pressable>
          <Ionicons name="chatbubble-outline" size={25} color="black" />
          <Ionicons name="paper-plane-outline" size={25} color="black" />
        </View>

        <View>
          <Pressable onPress={isBookmarkedHandler}>
            {isBookmarked ? (
              <Ionicons name="md-bookmark" size={25} color="black" />
            ) : (
              <Ionicons name="md-bookmark-outline" size={25} color="black" />
            )}
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.likes}> {likesCount} likes</Text>
        <Text style={styles.caption}> {caption}</Text>
        <Text style={styles.postedAt}> {postedAt}</Text>
      </View>
    </View>
  );
};

export default Footer;
