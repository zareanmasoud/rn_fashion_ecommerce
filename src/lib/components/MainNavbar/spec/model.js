import R from 'res/R';

const model = {
  backButton(navigation) {
    return {
      handlePress: () => navigation.pop(),
      src: R.images.backButton,
    };
  },
  buttonTwo(cart, cartTextTestID) {
    return {
      handlePress: () => {},
      src: R.images.cartButton,
      badge: {
        cart,
        cartTextTestID,
      },
    };
  },
  logoButton: {
    handlePress: () => {},
    src: R.images.logoButton,
  },
};

export default model;
