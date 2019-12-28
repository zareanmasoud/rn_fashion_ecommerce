import React from 'react';
import NavbarButton from '../NavbarButton/NavbarButton';
import Badge from '../Badge';
import type {ButtonTwo} from '../types';

type Props = {
  buttonTwo: ButtonTwo,
};

export default function CartButton({buttonTwo}: Props) {
  const {badge} = buttonTwo;
  return (
    <>
      <NavbarButton handlePress={buttonTwo.handlePress} src={buttonTwo.src} />
      <Badge {...badge} />
    </>
  );
}
