import { Button } from '@mui/material';
import { FlowersType } from '../../types/types';
import { MouseEvent, useEffect, useState } from 'react';
import { btnSX, BUTTONS } from '../../utils/constants';

interface Icards {
  cards: FlowersType;
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export const ButtonCard = (props: Icards) => {
  const [inCart, setInCart] = useState(false);

  const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    e.preventDefault();
    const isEqual = props.cart.some((item) => item.id === props.cards.id);
    if (!isEqual) {
      props.setCart([...props.cart, props.cards]);
      props.setTotalQuantity(props.totalQuantity + 1);
      setInCart(true);
    }
    if (e.currentTarget.textContent === BUTTONS.delete) {
      const isEqual = props.cart.some((item) => item.id === props.cards.id);
      if (isEqual) {
        props.setCart(props.cart.filter((item: FlowersType) => item.id !== props.cards.id));
        props.setTotalQuantity(props.totalQuantity - 1);
        setInCart(false);
      }
    }
  };

  useEffect(() => {
    const isEqual = props.cart.some((item) => item.id === props.cards.id);
    if (isEqual) {
      setInCart(true);
    }
  }, []);

  return (
    <Button
      onClick={(e) => {
        buttonHandler(e);
      }}
      sx={btnSX}
    >
      {inCart ? BUTTONS.delete : BUTTONS.add}
    </Button>
  );
};
