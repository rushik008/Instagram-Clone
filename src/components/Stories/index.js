import React from 'react';
import {FlatList} from 'react-native';

import Story from '../Story';

const data = [
  {
    imageUri:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8&w=1000&q=80',
    name: 'Person 1',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    name: 'Person 2',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Person 3',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Person 4',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Person 5',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Person 6',
  },
  {
    imageUri:
      'https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg',
    name: 'Person 7',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Person 8',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Person 9',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2U6GvlY0zljOHTavnd7Isok5h7DqvzW6RBdV4aae7vEFqjeUXNKo2FPBvz9h1t--g9YU&usqp=CAU',
    name: 'Person 10',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({name}) => name}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
