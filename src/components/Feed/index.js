import React from 'react';
import {FlatList} from 'react-native';

import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri:
        'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
      name: 'johny_depp',
    },
    imagePostUri:
      'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
    caption: 'Captain Jack Sparrow here',
    likesCount: '1472583',
    postedAt: '1 Hour ago',
  },
  {
    user: {
      imageUri:
        'https://i.pinimg.com/736x/a2/15/01/a21501f6d1e149ae783246d2ad59186a.jpg',
      name: 'marvel',
    },
    imagePostUri:
      'https://www.looper.com/img/gallery/rdj-just-made-extremely-revealing-comments-iron-mans-future/intro-1607982210.jpg',
    caption: 'New movie is coming soon...',
    likesCount: '2345689',
    postedAt: '5 Hours ago',
  },
  {
    user: {
      imageUri:
        'https://www.thesun.co.uk/wp-content/uploads/2021/07/e3edd3c8-76ac-4fa9-95c7-6c0d6726ec52.jpg',
      name: 'cr_7',
    },
    imagePostUri: 'https://i.insider.com/60ddb0c6cad1220011caf6d1?width=700',
    caption: 'Winning another match !!!',
    likesCount: '3578910',
    postedAt: '10 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://www.thesun.co.uk/wp-content/uploads/2021/07/e3edd3c8-76ac-4fa9-95c7-6c0d6726ec52.jpg',
      name: 'cr_8',
    },
    imagePostUri: 'https://i.insider.com/60ddb0c6cad1220011caf6d1?width=700',
    caption: 'Winning another match !!!',
    likesCount: '3578910',
    postedAt: '10 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      vertical
      showsVerticalScrollIndicators={false}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
