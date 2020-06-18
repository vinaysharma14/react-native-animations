import { StyleSheet, Dimensions } from 'react-native';
import { HEADER_HEIGHT } from '../../constants';

const { height } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: height * 0.025,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  contentCenter: {
    justifyContent: 'center',
  },
});
