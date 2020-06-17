import React, {useState, useEffect} from 'react';

import {View, Animated, Platform, Text} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import {styles} from '../../assets/styles';
import {splashScreenImages} from '../../assets/images';

export const Splash = () => {
  const [toValue, setToValue] = useState(0);
  const [translateY] = useState(new Animated.Value(1));
  const {top: marginTop, bottom: marginBottom} = useSafeArea();

  useEffect(() => {
    // * un-comment to simulate a busy app
    // setInterval(() => {
    //   for (var i = 0; i < 5e8; i++) {}
    // }, 1000);
  }, []);

  useEffect(() => {
    if (toValue) {
      Animated.timing(translateY, {
        toValue,
        delay: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [translateY, toValue]);

  return (
    <View
      style={[styles.flex, Platform.OS === 'ios' && {marginTop, marginBottom}]}>
      <Animated.View
        style={[styles.header, styles.contentCenter, styles.itemsCenter]}>
        <Text style={styles.headerText}>APP NAME</Text>
      </Animated.View>

      <View style={[styles.flex, styles.itemsCenter]}>
        <Animated.View style={[styles.flex]} />

        <Animated.Image
          source={splashScreenImages[0]}
          style={[styles.splashImage, {transform: [{translateY}]}]}
        />

        <View
          style={styles.flex}
          onLayout={({nativeEvent}) => {
            const {height} = nativeEvent.layout;
            !toValue && setToValue(-height);
          }}
        />
      </View>
    </View>
  );
};
