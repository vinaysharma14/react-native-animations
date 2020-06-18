import React from 'react';
import {SafeAreaView} from 'react-native';

import {Header, BlurImage} from '../../components';

export const Home = () => {
  return (
    <SafeAreaView>
      <Header />

      <BlurImage />
    </SafeAreaView>
  );
};
