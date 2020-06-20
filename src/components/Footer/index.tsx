import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';

import {commonStyles} from '../../assets/styles';

export const Footer = () => {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(30));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translateY]);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateY}]}}>
        <Animated.Text
          style={[commonStyles.MontserratRegular, styles.quote, {opacity}]}>
          Without requirements or design, programming is the art of adding bugs
          to an empty text file.
        </Animated.Text>

        <Animated.Text
          style={[commonStyles.MontserratRegular, styles.author, {opacity}]}>
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
