import R from 'res/R';

const model = {
  addToCart(addToCart) {
    return {
      id: 3,
      handlePress: () => addToCart(),
      text: R.strings.product.tabbar.addToCart,
    };
  },
};

export default model;
