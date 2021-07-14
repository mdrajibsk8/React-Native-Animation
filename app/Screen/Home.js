import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import ProductList from '../Component/ProductList';

var scroll = 0;

export default function Home(props) {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetchProduct();
    return () => null;
  }, []);

  const fetchProduct = async () => {
    return await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        return setproduct(json);
      });
  };

  const onScroll = e => {
    const {navigation} = props;
    let contentoffsetY = e.nativeEvent.contentOffset.y;
    // console.log("contentoffsetY",contentoffsetY);
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
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <ScrollView onScroll={onScroll}>
        {product.map((item, key) => (
          <ProductList
            key={key}
            index={key}
            item={item}
            navi={props.navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}
