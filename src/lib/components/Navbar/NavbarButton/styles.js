import {StyleSheet} from 'react-native';
import R from 'res/R';
import {scale} from '../../../utils/scaling';

const styles = StyleSheet.create({
  buttonView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonImg: {
    width: scale(20),
    height: scale(20),
    tintColor: R.colors.darkGrayTint,
  },
});

export default styles;
