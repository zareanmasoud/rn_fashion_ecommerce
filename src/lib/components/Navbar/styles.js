import {StyleSheet} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
// eslint-disable-next-line import/no-extraneous-dependencies
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
