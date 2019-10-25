import colors from '../colors';
import {shadow} from './shadow';

export const palette = {
  shadow: function(type) {
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
