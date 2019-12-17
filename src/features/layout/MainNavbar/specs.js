// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';

const specs = {
  backButtonSpec(navigation) {
    return {
      press: () => navigation.pop(),
      src: R.images.backButton,
    };
  },
  buttonTwoSpec(cart, cartTextTestID) {
    return {
      press: () => {},
      src: R.images.cartButton,
      badge: {
        cart,
        cartTextTestID,
      },
    };
  },
  logoButtonSpec: {
    press: () => {},
    src: R.images.logoButton,
  },
};

export default specs;
