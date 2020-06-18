import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import {BUTTONS} from '../../constants';

import {commonStyles} from '../../assets/styles';

export const Buttons = () => {
  return (
    <View style={[commonStyles.flex, commonStyles.flexRow]}>
      <View style={[styles.absoluteBorder, styles.verticalBorder]} />

      <View style={[styles.whiteBorder, commonStyles.bgWhite]} />

      <View style={commonStyles.flex}>
        <View style={[styles.absoluteBorder, styles.horizontalBorder]} />

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
    fontSize: height * 0.018,
  },
  absoluteBorder: {
    alignSelf: 'center',
    position: 'absolute',
  },
  verticalBorder: {
    left: 0,
    right: 0,
    borderTopWidth: 1,
  },
  horizontalBorder: {
    top: 0,
    bottom: 0,
    borderLeftWidth: 1,
  },
});
