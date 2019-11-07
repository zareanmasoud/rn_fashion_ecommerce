// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';

const specs = {
  backButtonSpec(navigation) {
    return {
      press: () => navigation.pop(),
      src: R.images.backButton,
    };
  },
  buttonTwoSpec: {
    press: () => {},
    src: R.images.cartButton,
  },
  logoButtonSpec: {
    press: () => {},
    src: R.images.logoButton,
  },
};

export default specs;
