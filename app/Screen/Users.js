import React, {useEffect, useState} from 'react';
import {View, Dimensions, Image, ScrollView} from 'react-native';
import UserList from '../Component/UserList';

var scroll = 0;

const Users = props => {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    fetchUser();
    return () => null;
  }, []);

  const fetchUser = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        return setuserList(json);
      });
  };

  const onScroll = e => {
    const {navigation} = props;
    let contentoffsetY = e.nativeEvent.contentOffset.y;
    console.log('contentoffsetY', contentoffsetY);
    let diff = contentoffsetY - scroll;
    if (diff < 0 || scroll < 0) {
      navigation.setOptions({tabBarVisible: true});
    } else {
      navigation.setOptions({tabBarVisible: false});
    }
    scroll = contentoffsetY;
  };

  return (
    <View style={{flex: 1, paddingTop: 10, backgroundColor: '#eee'}}>
      <ScrollView onScroll={onScroll}>
        {userList.map((item, key) => (
          <UserList key={key} index={key} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Users;
