import React, {useState, useEffect} from 'react';

import {View, Animated, Platform, Text, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import {commonStyles} from '../../assets/styles';
import {splashScreenImages} from '../../assets/images';

import {ANIMATION_DURATION, USE_NATIVE_DRIVER} from '../../constants';

import {Header} from '../../components';

import {HEADER_HEIGHT, IMAGE_HEIGHT} from '../../constants';

export const Splash: React.FC<any> = ({navigation}) => {
  const [toValue, setToValue] = useState(0);
  const [splashImage, setSplashImage] = useState(-1);

  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(0));

  let {top: paddingTop, bottom: paddingBottom} = useSafeArea();

  if (paddingTop === 44) {
    paddingTop -= 12;
  }

  useEffect(() => {
    // * un-comment to simulate a busy app
    // setInterval(() => {
    //   for (var i = 0; i < 5e8; i++) {}
    // }, 1000);
    setSplashImage(
      Math.floor(Math.random() * Math.floor(splashScreenImages.length)),
    );
  }, []);

  useEffect(() => {
    if (toValue) {
      const duration = ANIMATION_DURATION;
      const useNativeDriver = USE_NATIVE_DRIVER;

      Animated.parallel([
        Animated.timing(opacity, {
          duration,
          toValue: 1,
          delay: 1000,
          useNativeDriver,
        }),
        Animated.timing(translateY, {
          duration,
          toValue,
          delay: 1000,
          useNativeDriver,
        }),
      ]).start(() => navigation.replace('Home', {splashImage}));
    }
  }, [opacity, translateY, toValue, navigation, splashImage]);

  return (
    <View
      style={[
        commonStyles.flex,
        commonStyles.bgWhite,
        Platform.OS === 'ios' && {paddingTop, paddingBottom},
      ]}
      onLayout={({nativeEvent}) => {
        const {height} = nativeEvent.layout;
        !toValue &&
          setToValue(
            -(
              (height - IMAGE_HEIGHT) / 2 -
              HEADER_HEIGHT -
              (Platform.OS === 'ios' ? paddingTop : 0)
            ),
          );
      }}
    >
      <Animated.View
        style={[
          commonStyles.header,
          commonStyles.contentCenter,
          commonStyles.itemsCenter,
          Platform.OS === 'ios' && {top: paddingTop},
        ]}
      >
        <Text style={commonStyles.headerText}>Shared Element Transition</Text>
      </Animated.View>

      <Animated.View
        style={[
          {opacity},
          commonStyles.header,
          commonStyles.contentCenter,
          Platform.OS === 'ios' && {top: paddingTop},
        ]}
      >
        <Header />
      </Animated.View>

      <View
        style={[
          commonStyles.flex,
          commonStyles.itemsCenter,
          commonStyles.contentCenter,
        ]}
      >
        <Animated.Image
          source={splashScreenImages[splashImage]}
          style={[styles.splashImage, {transform: [{translateY}]}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashImage: {
    aspectRatio: 1,
    height: IMAGE_HEIGHT,
  },
});
