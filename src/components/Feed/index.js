import React from 'react';
import {FlatList, View} from 'react-native';

import Post from '../Post';
import Stories from '../UserStories';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
      name: 'johny_depp',
    },
    imagePostUri:
      'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
    caption: 'Captain Jack Sparrow here',
    likesCount: 123,
    postedAt: '1 Hour ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://i.pinimg.com/736x/a2/15/01/a21501f6d1e149ae783246d2ad59186a.jpg',
      name: 'marvel',
    },
    imagePostUri:
      'https://www.looper.com/img/gallery/rdj-just-made-extremely-revealing-comments-iron-mans-future/intro-1607982210.jpg',
    caption: 'New movie is coming soon...',
    likesCount: 2345689,
    postedAt: '5 Hours ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://www.thesun.co.uk/wp-content/uploads/2021/07/e3edd3c8-76ac-4fa9-95c7-6c0d6726ec52.jpg',
      name: 'cr_7',
    },
    imagePostUri: 'https://i.insider.com/60ddb0c6cad1220011caf6d1?width=700',
    caption: 'Winning another match !!!',
    likesCount: 4578810,
    postedAt: '10 minutes ago',
  },
  {
    id: '4',
    user: {
      imageUri:
        'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/pankaj_tripathi_mirzapur_2_main.jpg',
      name: 'pankajtripathi',
    },
    imagePostUri:
      'https://images.news18.com/ibnlive/uploads/2019/01/Pankaj-Tripathi-Feature.jpg?im=FitAndFill,width=1200,height=900',
    caption: 'Kaise hai aap log ?',
    likesCount: 3578910,
    postedAt: '10 minutes ago',
  },
  {
    id: '5',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: 'spiderman',
    },
    imagePostUri: 'https://wallpaperaccess.com/full/1279436.jpg',
    caption: 'Coming soon...',
    likesCount: 35880,
    postedAt: '15 minutes ago',
  },
  {
    id: '6',
    user: {
      imageUri:
        'https://pbs.twimg.com/profile_images/1247482752351588352/EgHoUNqQ_400x400.jpg',
      name: 'chrishemworth',
    },
    imagePostUri:
      'https://m.economictimes.com/thumb/msid-91981734,width-1200,height-900,resizemode-4,imgsize-111746/the-film-will-be-released-in-india-a-day-earlier-than-previously-planned-.jpg',
    caption: 'Thor Love and Thunder Coming soon...',
    likesCount: 5345880,
    postedAt: '30 minutes ago',
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={data}
        vertical
        showsVerticalScrollIndicators={false}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

export default Feed;
