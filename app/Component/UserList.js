import React, {memo} from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';

const AnimatableTouchableOpacity =
  Animatable.createAnimatableComponent(Pressable);

const UserList = props => {
  const {item, index} = props;

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
  return (
    <AnimatableTouchableOpacity
      useNativeDriver
      animation={animation}
      delay={250 + (index + 1) * 200}
      style={styles.mainView}>
      
      <FastImage
        style={{width:50,height:50}}
        source={{
          uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{flex: 1,marginLeft:15}}>
        <Text
          numberOfLines={1}
          style={styles.title}>
          {item.name}
        </Text>
        <Text
          numberOfLines={1}
          style={styles.cat}>
          {item.email}
        </Text>
      </View>

    </AnimatableTouchableOpacity>
  );
};

export default memo(UserList);


const styles = StyleSheet.create({
    mainView : {
        // height: 100,
        backgroundColor: '#fff',
        padding: 10,
        // marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 10,
        width: '95%',
        elevation:2,
        justifyContent: 'space-between',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:5
    },
    title:{
        fontSize: 14,
        // width: '95%',
        fontWeight: '700',
        color: '#444',
    },
    cat : {
        opacity: 0.5,
        fontSize: 13,
        // width: '45%',
        marginBottom: 5,
        textTransform: 'capitalize',
      }
})