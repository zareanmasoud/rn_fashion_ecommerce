import R from 'res/R';

const model = {
  buttons: {
    home: {
      id: 0,
      handlePress: () => {},
      src: R.images.homeButton,
      text: R.strings.home.layout.mainTabbar.home,
    },
    wishlist: {
      id: 1,
      handlePress: () => {},
      src: R.images.wishlistButton,
      text: R.strings.home.layout.mainTabbar.wishlist,
    },
    help: {
      id: 2,
      handlePress: () => {},
      src: R.images.helpButton,
      text: R.strings.home.layout.mainTabbar.help,
    },
    profile: {
      id: 3,
      handlePress: () => {},
      src: R.images.profileButton,
      text: R.strings.home.layout.mainTabbar.profile,
    },
  },
};

export default model;
