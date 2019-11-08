import React from 'react';
import NavbarButton from '../NavbarButton/NavbarButton';
import Badge from '../Badge';

type Props = {
  spec: any,
};

export default function CartButton({spec}: Props) {
  return (
    <>
      <NavbarButton spec={spec} />
      <Badge />
    </>
  );
}
