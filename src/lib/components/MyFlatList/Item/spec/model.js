import R from 'res/R';

const model = {
  item(mockHandlePress) {
    return {
      handlePress: () => mockHandlePress(),
      photo: R.images.product1,
    };
  },
};

export default model;
