import R from 'res/R';

const model = {
  backButton(navigation) {
    return {
      press: () => navigation.pop(),
      src: R.images.backButton,
    };
  },
  buttonTwo(cart, cartTextTestID) {
    return {
      press: () => {},
      src: R.images.cartButton,
      badge: {
        cart,
        cartTextTestID,
      },
    };
  },
  logoButton: {
    press: () => {},
    src: R.images.logoButton,
  },
};

export default model;
