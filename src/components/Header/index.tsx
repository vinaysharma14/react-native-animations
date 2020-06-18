import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {commonStyles} from '../../assets/styles';
import {HEADER_HEIGHT} from '../../constants';

export const Header = () => {
  return (
    <View style={[styles.header, commonStyles.itemsCenter]}>
      <Text style={commonStyles.headerText}>APP NAME</Text>
      <Text style={commonStyles.headerText}>About Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
});
