import R from 'res/R';

const model = {
  buttons: {
    addWishlist: {
      id: 1,
      press: () => {},
      src: R.images.backButton,
      text: R.strings.home.layout.mainTabbar.home,
    },
    fitting: {
      id: 2,
      press: () => {},
      src: R.images.cartButton,
      text: R.strings.home.layout.mainTabbar.wishlist,
    },
    addToCart(press) {
      return {
        id: 3,
        press: () => press(),
        src: R.images.logoButton,
        text: R.strings.home.layout.mainTabbar.help,
      };
    },
  },
};

export default model;
