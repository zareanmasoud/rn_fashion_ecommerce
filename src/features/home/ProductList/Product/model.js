import {PRODUCT_SCREEN} from 'screens/routes/constants';

const model = {
  product(navigation, data) {
    return {
      handlePress: () => navigation.navigate(PRODUCT_SCREEN, {id: data.id}),
      photo: data.photo !== null ? data.photo : '',
    };
  },
};

export default model;
