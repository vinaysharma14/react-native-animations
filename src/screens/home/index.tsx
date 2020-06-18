import React from 'react';
import {SafeAreaView} from 'react-native';

import {Header, BlurImage, Buttons} from '../../components';
import {commonStyles} from '../../assets/styles';

export const Home = () => {
  return (
    <SafeAreaView style={[commonStyles.flex, commonStyles.bgWhite]}>
      <Header />

      <BlurImage />

      <Buttons />
    </SafeAreaView>
  );
};
