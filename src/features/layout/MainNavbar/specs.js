import R from 'res/R';

const specs = {
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

export default specs;
