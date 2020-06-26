import { StyleSheet, Dimensions } from 'react-native';
import { HEADER_HEIGHT } from '../../constants';

import { FONT_FAMILY } from '../fonts';

const { height } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  z1: {
    zIndex: 1,
  },
  header: {
    left: 0,
    right: 0,
    position: 'absolute',
    height: HEADER_HEIGHT,
  },
  headerText: {
    fontSize: height * 0.025,
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  contentCenter: {
    justifyContent: 'center',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  MontserratRegular: {
    fontFamily: FONT_FAMILY.MontserratRegular,
  },
});
