import R from 'res/R';

const model = {
  addToCart(addToCart) {
    return {
      id: 3,
      handlePress: () => addToCart(),
      src: R.images.logoButton,
      text: R.strings.home.layout.mainTabbar.help,
    };
  },
};

export default model;
