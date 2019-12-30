import R from 'res/R';

const model = {
  buttons: {
    addWishlist: {
      id: 1,
      handlePress: () => {},
      src: R.images.wishlistButton,
      text: R.strings.home.layout.mainTabbar.home,
    },
    fitting: {
      id: 2,
      handlePress: () => {},
      src: R.images.hangerButton,
      text: R.strings.home.layout.mainTabbar.wishlist,
    },
    addToCart(addToCart) {
      return {
        id: 3,
        handlePress: () => addToCart(),
        text: R.strings.product.tabbar.addToCart,
      };
    },
  },
};

export default model;
