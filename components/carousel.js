import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <Swiper style={styles.wrapper} autoplay={true}>
      <View style={styles.slide}>
        <Image source={require('../assets/kratos.jpg')} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require('../assets/genshin-impact-yae-miko.jpg')} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require('../assets/cinema.jpg')} style={styles.image} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Carousel;