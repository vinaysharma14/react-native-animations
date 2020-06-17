import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  header: {
    height: height * 0.05,
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
  splashImage: {
    width: width * 0.7,
    height: width * 0.7,
  },
});
