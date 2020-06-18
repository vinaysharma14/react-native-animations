import React from 'react';
import {SafeAreaView, StyleSheet, Image, Dimensions} from 'react-native';

import {Header} from '../../components';
import {IMAGE_HEIGHT} from '../../constants';

import {splashScreenImages} from '../..//assets/images';

export const Home = () => {
  return (
    <SafeAreaView>
      <Header />

      <Image source={splashScreenImages[0]} style={styles.splashImage} />
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  splashImage: {
    width,
    alignSelf: 'center',
    height: IMAGE_HEIGHT,
  },
});
