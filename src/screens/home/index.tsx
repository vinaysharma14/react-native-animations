import React from 'react';
import {View, Platform} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import {Header, BlurImage, Buttons} from '../../components';
import {commonStyles} from '../../assets/styles';

export const Home = () => {
  const {top: paddingTop, bottom: paddingBottom} = useSafeArea();

  return (
    <View
      style={[
        commonStyles.flex,
        commonStyles.bgWhite,
        Platform.OS === 'ios' && {paddingTop, paddingBottom},
      ]}>
      <Header />

      <BlurImage />

      <Buttons />
    </View>
  );
};
