import React from 'react';
import NavbarButton from '../NavbarButton/NavbarButton';
import Badge from '../Badge';
import type {ButtonTwo} from '../model';

type Props = {
  buttonTwo: ButtonTwo,
};

export default function CartButton({buttonTwo}: Props) {
  const {badge} = buttonTwo;
  return (
    <>
      <NavbarButton press={buttonTwo.press} src={buttonTwo.src} />
      <Badge {...badge} />
    </>
  );
}
