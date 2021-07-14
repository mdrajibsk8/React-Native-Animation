import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');


const animation = {
  from: {
    opacity: 0,
    translateY: 60,
  },
  to: {
    opacity: 1,
    translateY: 0,
  },
};

function Single(props) {
  const {item} = props.route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      <SharedElement style={styles.imgView} id={item.image}>
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

      <Animatable.View 
      useNativeDriver
      animation={animation}
      delay={300}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.cat}>{item.category}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>

        <Text style={styles.desc}>{item.description}</Text>
      </Animatable.View>
    </View>
  );
}

// Single.sharedElements  = (route) => {

//   const { item } = route.params;
//   return [
//     {
//       id : item.image
//     }
//   ]
// }

export default Single;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  back: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    left: 15,
  },
  imgView: {
    width: width,
    height: height / 2,
    // marginBottom:10
  },
  title: {
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  cat: {
    opacity: 0.7,
    fontSize: 12,
    marginTop: 5,
    textTransform: 'capitalize',
    fontWeight: '800',
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    textTransform: 'capitalize',
    fontWeight: '800',
  },
  desc: {opacity: 0.4, fontSize: 12, marginTop: 5},
});
