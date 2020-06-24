import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {
  IMAGE_HEIGHT,
  NAVIGATION_FADE,
  USE_NATIVE_DRIVER,
  ANIMATION_DURATION,
} from '../../constants';

import {FONT_FAMILY} from '../../assets/fonts';
import {commonStyles} from '../../assets/styles';
import {splashScreenImages} from '../../assets/images';

interface Props {
  splashImage: number;
}

export const BlurImage: React.FC<Props> = ({splashImage}) => {
  const [opacity] = useState(new Animated.Value(0));
  const [overlayOpacity] = useState(new Animated.Value(0));
  const [translateXLeft] = useState(new Animated.Value(0));
  const [translateXRight] = useState(new Animated.Value(0));

  const [showAbsolute, setShowAbsolute] = useState(true);

  useEffect(() => {
    const duration = ANIMATION_DURATION;
    const useNativeDriver = USE_NATIVE_DRIVER;

    Animated.sequence([
      Animated.delay(NAVIGATION_FADE),
      Animated.parallel([
        Animated.timing(opacity, {
          duration,
          toValue: 1,
          useNativeDriver,
        }),
        Animated.timing(overlayOpacity, {
          duration,
          toValue: 0.4,
          useNativeDriver,
        }),
        Animated.timing(translateXLeft, {
          duration,
          toValue: -(width * 0.15),
          useNativeDriver,
        }),
        Animated.timing(translateXRight, {
          duration,
          toValue: width * 0.15,
          useNativeDriver,
        }),
      ]),
    ]).start(() => setShowAbsolute(false));
  }, [opacity, overlayOpacity, translateXLeft, translateXRight]);

  return (
    <View style={[commonStyles.z1, commonStyles.bgWhite]}>
      <Animated.View style={[styles.border, {opacity}]} />

      <View>
        <Animated.Image
          style={[styles.splashImage]}
          source={splashScreenImages[splashImage]}
        />

        <Animated.Image
          source={splashScreenImages[splashImage]}
          blurRadius={Platform.OS === 'ios' ? 10 : 2}
          style={[styles.splashImage, StyleSheet.absoluteFill, {opacity}]}
        />

        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.overlay,
            {opacity: overlayOpacity},
          ]}
        />

        <Animated.View
          style={[StyleSheet.absoluteFill, {opacity}, styles.headingContainer]}
        >
          <Text style={styles.heading}>
            ALL OF THE{'\n'}ANIMATIONS ARE{'\n'}RUNNING ON{'\n'}NATIVE THREAD!
          </Text>

          <View style={[styles.getInTouchContainer]}>
            <Text style={[commonStyles.MontserratRegular, styles.getInTouch]}>
              YOU CAN GET IN TOUCH WITH ME BELOW!
            </Text>
          </View>
        </Animated.View>

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

const {width, height} = Dimensions.get('window');

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
  headingContainer: {
    padding: 15,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: height * 0.035,
    fontFamily: FONT_FAMILY.MontserratLight,
  },
  getInTouchContainer: {
    borderTopWidth: 1,
  },
  getInTouch: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: height * 0.018,
  },
});
