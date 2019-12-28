import R from 'res/R';

const model = {
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
};

export default model;
