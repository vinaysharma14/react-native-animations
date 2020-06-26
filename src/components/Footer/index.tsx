import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';

import {commonStyles} from '../../assets/styles';
import {ANIMATION_DURATION, USE_NATIVE_DRIVER} from '../../constants';

export const Footer = () => {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(30));

  useEffect(() => {
    const duration = ANIMATION_DURATION;
    const useNativeDriver = USE_NATIVE_DRIVER;

    Animated.parallel([
      Animated.timing(opacity, {
        duration,
        toValue: 1,
        useNativeDriver,
      }),
      Animated.timing(translateY, {
        duration,
        toValue: 0,
        useNativeDriver,
      }),
    ]).start();
  }, [opacity, translateY]);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateY}]}}>
        <Animated.Text
          style={[commonStyles.MontserratRegular, styles.quote, {opacity}]}
        >
          Without requirements or design, programming is the art of adding bugs
          to an empty text file.
        </Animated.Text>

        <Animated.Text
          style={[commonStyles.MontserratRegular, styles.author, {opacity}]}
        >
          - Louis Srygley
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 1,
  },
  quote: {
    fontSize: height * 0.017,
  },
  author: {
    marginTop: 15,
    alignSelf: 'flex-end',
  },
});
