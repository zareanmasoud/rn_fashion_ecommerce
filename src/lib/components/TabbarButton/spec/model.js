import R from 'res/R';

const model = mockHandlePress => {
  return {
    id: 0,
    handlePress: () => mockHandlePress(),
    src: R.images.backButton,
    text: R.strings.home.layout.mainTabbar.home,
  };
};

export default model;
