import {StyleSheet} from 'react-native';
import R from 'res/R';
import {scale} from 'lib/utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: R.colors.whiteBackground,
    height: scale(50),
    ...R.palette.shadow('narrow'),
  },
  emptyView: {
    width: scale(20),
    height: scale(20),
  },
});
