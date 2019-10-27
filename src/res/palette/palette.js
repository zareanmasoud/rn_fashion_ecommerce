import colors from '../colors';
import {shadow} from './shadow';

const palette = {
  shadow(type) {
    return {
      ...shadow(type),
    };
  },
  heading: {
    color: colors.title,
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.text,
    fontSize: 17,
    textAlign: 'center',
  },
};

export default palette;
