export const shadow = (type) => {
  let obj = {};
  switch (type) {
    case 'narrow':
      obj = {
        width: 0,
        height: 2,
        shadowRadius: 0,
        elevation: 1,
      };
      break;
    case 'card':
      obj = {
        width: 1,
        height: 3,
        shadowRadius: 3,
        elevation: 2,
      };
      break;
  }
  const {width, height, shadowRadius, elevation} = obj;
  return {
    // ios
    shadowOffset: {width, height},
    shadowRadius,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    // android
    elevation,
  };
};
