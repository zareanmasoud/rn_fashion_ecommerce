import React from 'react';
import {ConcreteNavbar} from "../ConcreteNavbar";
// import styles from './styles';
// import PropTypes from 'prop-types';

export const Header = props => {
  const {noBackButton, navigation} = props;
  return (
    <>
      <ConcreteNavbar navigation={navigation} noBackButton={noBackButton}/>
      {/*<SelectMenuByGender/>*/}
    </>
  );
};

// Header.propTypes = {
//   navigation: PropTypes.object,
// };

