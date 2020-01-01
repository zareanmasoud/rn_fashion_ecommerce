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
  buttonImg(logoMode) {
    return {
      width: scale(logoMode ? 70 : 20),
      height: scale(logoMode ? 15 : 20),
      resizeMode: 'contain',
      tintColor: R.colors.darkGrayTint,
    };
  },
});

export default styles;
