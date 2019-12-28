import R from 'res/R';

const model = {
  buttons: {
    addWishlist: {
      id: 1,
      handlePress: () => {},
      src: R.images.backButton,
      text: R.strings.home.layout.mainTabbar.home,
    },
    fitting: {
      id: 2,
      handlePress: () => {},
      src: R.images.cartButton,
      text: R.strings.home.layout.mainTabbar.wishlist,
    },
    addToCart(addToCart) {
      return {
        id: 3,
        handlePress: () => addToCart(),
        src: R.images.logoButton,
        text: R.strings.home.layout.mainTabbar.help,
      };
    },
  },
};

export default model;
