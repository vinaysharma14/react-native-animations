import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {BUTTONS} from '../../constants';

import {commonStyles} from '../../assets/styles';

const {width} = Dimensions.get('window');

export const Buttons = () => {
  const [show, setShow] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const [translateX] = useState(new Animated.Value(-width + 15));

  useEffect(() => {
    if (show) {
      Animated.sequence([
        Animated.delay(300),
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }, [show, translateY, translateX]);

  return (
    <View
      style={[commonStyles.flex, commonStyles.flexRow]}
      onLayout={({nativeEvent}) => {
        const {height} = nativeEvent.layout;

        !show && translateY.setValue(-height);
        !show && setShow(true);
      }}>
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
          <View
            key={rowIndex}
            style={[commonStyles.flex, commonStyles.flexRow]}>
            {row.map((col, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[commonStyles.flex, commonStyles.contentCenter]}>
                <Text
                  style={[
                    styles.buttonText,
                    commonStyles.MontserratRegular,
                    colIndex ? styles.leftPadding : {},
                  ]}>
                  {col}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
});
