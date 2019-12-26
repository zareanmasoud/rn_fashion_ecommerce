import {PRODUCT_SCREEN} from 'screens/routes/constants';

const specs = {
  product(navigation, data) {
    return {
      press: () => navigation.navigate(PRODUCT_SCREEN, {id: data.id}),
    };
  },
};

export default specs;
