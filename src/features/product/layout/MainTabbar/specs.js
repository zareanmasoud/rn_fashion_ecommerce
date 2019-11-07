// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';

const specs = {
  addWishlist: {
    press: () => {},
    src: R.images.backButton,
    text: R.strings.home.layout.mainTabbar.home,
  },
  fitting: {
    press: () => {},
    src: R.images.cartButton,
    text: R.strings.home.layout.mainTabbar.wishlist,
  },
  addToCart: {
    press: () => {},
    src: R.images.logoButton,
    text: R.strings.home.layout.mainTabbar.help,
  },
};

export default specs;
