import colors from '../colors';
import setShadow from './shadow';

const palette = {
  shadow(type) {
    return {
      ...setShadow(type),
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
