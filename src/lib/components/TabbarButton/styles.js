import {StyleSheet} from 'react-native';
import R from 'res/R';
import {scale} from 'lib/utils/scaling';

const styles = StyleSheet.create({
  buttonView(mode) {
    return {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor:
        mode === 'product' ? R.colors.grayBackground : 'transparent',
      borderRadius: mode === 'product' ? 40 : 0,
    };
  },
  buttonImg: {
    width: scale(20),
    height: scale(20),
    tintColor: R.colors.darkGrayTint,
  },
});

export default styles;
