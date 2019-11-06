import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
  safeAreaView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default styles;
