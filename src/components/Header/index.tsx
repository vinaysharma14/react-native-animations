import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import {reactNative} from '../../assets/images';
import {commonStyles} from '../../assets/styles';

import {HEADER_HEIGHT} from '../../constants';

import {dependencies} from '../../../package.json';

export const Header = () => {
  return (
    <View
      style={[
        styles.header,
        commonStyles.z1,
        commonStyles.bgWhite,
        commonStyles.itemsCenter,
      ]}
    >
      <View style={[commonStyles.flexRow, commonStyles.itemsCenter]}>
        <Image source={reactNative} style={styles.image} />
        <Text style={[commonStyles.MontserratRegular, styles.version]}>
          {dependencies['react-native']}
        </Text>
      </View>

      <Text style={commonStyles.headerText}>RN MEET '20</Text>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  image: {
    aspectRatio: 1,
    marginRight: 5,
    width: height * 0.038,
  },
  version: {
    fontSize: height * 0.016,
  },
});
