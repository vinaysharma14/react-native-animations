import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  Linking,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {BUTTONS, ANIMATION_DURATION, USE_NATIVE_DRIVER} from '../../constants';

import {commonStyles} from '../../assets/styles';

const {width} = Dimensions.get('window');

export const Buttons = () => {
  const [show, setShow] = useState(false);
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(0));
  const [translateX] = useState(new Animated.Value(-width + 15));

  useEffect(() => {
    if (show) {
      const duration = ANIMATION_DURATION;
      const useNativeDriver = USE_NATIVE_DRIVER;

      Animated.sequence([
        Animated.delay(300),
        Animated.parallel([
          Animated.timing(opacity, {
            duration,
            toValue: 1,
            delay: 250,
            useNativeDriver,
          }),
          Animated.timing(translateY, {
            duration,
            toValue: 0,
            useNativeDriver,
          }),
          Animated.timing(translateX, {
            duration,
            toValue: 0,
            useNativeDriver,
          }),
        ]),
      ]).start();
    }
  }, [show, opacity, translateY, translateX]);

  return (
    <View
      style={[commonStyles.flex, commonStyles.flexRow]}
      onLayout={({nativeEvent}) => {
        const {height} = nativeEvent.layout;

        !show && translateY.setValue(-height);
        !show && setShow(true);
      }}
    >
      <Animated.View
        style={[
          styles.absoluteBorder,
          styles.horizontalBorder,
          {transform: [{translateX}]},
        ]}
      />

      <View style={[styles.whiteBorder, commonStyles.bgWhite]} />

      <View style={commonStyles.flex}>
        {show && (
          <Animated.View
            style={[
              styles.absoluteBorder,
              styles.verticalBorder,
              {transform: [{translateY}]},
            ]}
          />
        )}

        {BUTTONS.map((row, rowIndex) => (
          <Animated.View
            key={rowIndex}
            style={[commonStyles.flex, commonStyles.flexRow, {opacity}]}
          >
            {row.map(({text, image, url}, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[commonStyles.flex, commonStyles.contentCenter]}
                onPress={() => Linking.openURL(url)}
              >
                <Image
                  source={image}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    !rowIndex && colIndex ? styles.stackOverflow : {},
                    rowIndex && colIndex ? styles.youTube : {},
                  ]}
                />

                <Text
                  style={[
                    styles.buttonText,
                    commonStyles.MontserratRegular,
                    colIndex ? styles.leftPadding : {},
                  ]}
                >
                  {text}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        ))}
      </View>

      <View style={[styles.whiteBorder, commonStyles.bgWhite]} />
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  whiteBorder: {
    width: 15,
  },
  leftPadding: {
    paddingLeft: 15,
  },
  buttonText: {
    marginTop: 15,
    fontSize: height * 0.02,
  },
  absoluteBorder: {
    alignSelf: 'center',
    position: 'absolute',
  },
  horizontalBorder: {
    width: '100%',
    borderTopWidth: 1,
  },
  verticalBorder: {
    height: '100%',
    borderLeftWidth: 1,
  },
  image: {
    width: height * 0.05,
    height: height * 0.05,
  },
  stackOverflow: {
    height: height * 0.045,
    width: height * 0.08,
  },
  youTube: {
    height: height * 0.045,
    width: height * 0.09,
  },
});
