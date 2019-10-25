import React from 'react';
import {MainNavbar} from '../MainNavbar';
// import styles from './styles';
// import PropTypes from 'prop-types';

export const MainHeader = props => {
  const {noBackButton, navigation} = props;
  return (
    <>
      <MainNavbar navigation={navigation} noBackButton={noBackButton} />
      {/*<SelectMenuByGender/>*/}
    </>
  );
};

// MainHeader.propTypes = {
//   navigation: PropTypes.object,
// };
