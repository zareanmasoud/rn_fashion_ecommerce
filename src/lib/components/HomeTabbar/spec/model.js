import R from 'res/R';

const model = {
  buttons: {
    home: {
      id: 0,
      press: () => {},
      src: R.images.backButton,
      text: R.strings.home.layout.mainTabbar.home,
    },
    wishlist: {
      id: 1,
      press: () => {},
      src: R.images.cartButton,
      text: R.strings.home.layout.mainTabbar.wishlist,
    },
    help: {
      id: 2,
      press: () => {},
      src: R.images.logoButton,
      text: R.strings.home.layout.mainTabbar.help,
    },
    profile: {
      id: 3,
      press: () => {},
      src: R.images.logoButton,
      text: R.strings.home.layout.mainTabbar.profile,
    },
  },
};

export default model;
