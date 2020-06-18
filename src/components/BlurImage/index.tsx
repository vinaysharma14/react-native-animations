import React, {useEffect, useState} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';

import {IMAGE_HEIGHT, NAVIGATION_FADE} from '../../constants';

import {commonStyles} from '../../assets/styles';
import {splashScreenImages} from '../../assets/images';

export const BlurImage = () => {
  const [blur] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const [overlayOpacity] = useState(new Animated.Value(0));
  const [translateXLeft] = useState(new Animated.Value(0));
  const [translateXRight] = useState(new Animated.Value(0));

  const [showAbsolute, setShowAbsolute] = useState(true);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(NAVIGATION_FADE),
      Animated.parallel([
        Animated.timing(blur, {
          toValue: 10,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0.2,
          useNativeDriver: true,
        }),
        Animated.timing(translateXLeft, {
          toValue: -(width * 0.15),
          useNativeDriver: true,
        }),
        Animated.timing(translateXRight, {
          toValue: width * 0.15,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => setShowAbsolute(false));
  }, [blur, opacity, overlayOpacity, translateXLeft, translateXRight]);

  return (
    <View style={[commonStyles.z1]}>
      <Animated.View style={[styles.border, {opacity}]} />

      <View>
        <Animated.Image
          blurRadius={blur}
          style={styles.splashImage}
          source={splashScreenImages[0]}
        />

        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.overlay,
            {opacity: overlayOpacity},
          ]}
        />

        {showAbsolute && (
          <Animated.View
            style={[
              styles.absolute,
              styles.leftAbsolute,
              {transform: [{translateX: translateXLeft}]},
            ]}
          />
        )}

        {showAbsolute && (
          <Animated.View
            style={[
              styles.absolute,
              styles.rightAbsolute,
              {transform: [{translateX: translateXRight}]},
            ]}
          />
        )}
      </View>

      <Animated.View style={[styles.border, {opacity}]} />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  border: {
    borderTopWidth: 2,
  },
  splashImage: {
    width,
    alignSelf: 'center',
    height: IMAGE_HEIGHT,
  },
  overlay: {
    backgroundColor: 'white',
  },
  leftAbsolute: {
    left: 0,
  },
  rightAbsolute: {
    right: 0,
  },
  absolute: {
    top: 0,
    bottom: 0,
    width: width * 0.15,
    position: 'absolute',
    backgroundColor: 'white',
  },
});
