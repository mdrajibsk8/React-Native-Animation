import React, {memo} from 'react';
import {Text, Pressable, View, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

const AnimatableTouchableOpacity =
  Animatable.createAnimatableComponent(Pressable);

const ProductList = props => {
  const {item, index} = props;

  const animation = {
    from: {
      opacity: 0,
      translateX: 60,
    },
    to: {
      opacity: 1,
      translateX: 0,
    },
  };
  return (
    <AnimatableTouchableOpacity
      onPress={() => props.navi.navigate('Single', {item})}
      useNativeDriver
      animation={animation}
      delay={250 + (index + 1) * 200}
      style={styles.mainView}>
      <View style={{flex: 3}}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.cat}>
          {item.category}
        </Text>
        <Text>₹ {item.price}</Text>
      </View>
      <SharedElement id={item.image} style={{flex:1}}>
        {/* <Image
          source={{uri: item.image}}
          style={{flex: 1, resizeMode: 'contain'}}
        /> */}
        <FastImage 
          source={{uri: item.image}}
          style={{flex: 1}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </SharedElement>
    </AnimatableTouchableOpacity>
  );
};

export default memo(ProductList);

const styles = StyleSheet.create({
  mainView: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    // marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    width: '95%',
    elevation: 2,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 12,
    width: '95%',
    fontWeight: '700',
    color: '#444',
  },
  cat: {
    opacity: 0.5,
    fontSize: 12,
    width: '45%',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
});
