import React from 'react';
import {View, Platform} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import {Header, BlurImage, Buttons} from '../../components';
import {commonStyles} from '../../assets/styles';

export const Home: React.FC<any> = ({route}) => {
  const {splashImage} = route.params;
  let {top: paddingTop, bottom: paddingBottom} = useSafeArea();

  if (paddingTop === 44) {
    paddingTop -= 12;
  }

  return (
    <View
      style={[
        commonStyles.flex,
        commonStyles.bgWhite,
        Platform.OS === 'ios' && {paddingTop, paddingBottom},
      ]}>
      <Header />

      <BlurImage splashImage={splashImage} />

      <Buttons />
    </View>
  );
};
