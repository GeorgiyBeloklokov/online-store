import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { PROMO, SERVICE_MESSAGES } from '../../utils/constants';

interface ICartPromo {
  totalCostCart: number;
}

export const CartPromo = ({ totalCostCart }: ICartPromo) => {
  const [name, setName] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [isPromo, setIsPromo] = useState(false);
  const [isPromoAdded, setIsPromoAdded] = useState(false);
  const [Promo, setPromo] = useState<string[]>([]);
  const [promoApplied, setPromoApplied] = useState<string[]>([]);

  const [promoPrice, setPromoPrice] = useState(totalCostCart);

  if (name === 'rs') {
    setIsPromo(true);
    setName('');
    setPromo([...Promo, PROMO.rss10]);
  }

  if (name === 'epm') {
    setIsPromo(true);
    setName('');
    setPromo([...Promo, PROMO.epam10]);
  }

  const addPromoHandler = (item: string) => {
    let percent = totalCostCart * (10 / 100);
    if (item === PROMO.rss10) {
      setPromoApplied([...promoApplied, PROMO.rss10]);
      setIsPromoAdded(true);
      setPromoPrice(promoPrice - percent);
    }
    if (item === PROMO.epam10) {
      setPromoApplied([...promoApplied, PROMO.epam10]);
      setIsPromoAdded(true);
      setPromoPrice(promoPrice - percent);
    }
  };

  const dropPromoHandler = (item: string) => {
    let percent = totalCostCart * (10 / 100);
    if (item === PROMO.rss10) {
      setPromoApplied(promoApplied.filter((toFilter) => item !== toFilter));
      setPromoPrice(promoPrice + percent);
    }
    if (item === PROMO.epam10) {
      setPromoApplied(promoApplied.filter((toFilter) => item !== toFilter));
      setPromoPrice(promoPrice + percent);
    }
  };

  useEffect(() => {
    if (!promoApplied.length) {
      setIsPromoAdded(false);
    }
  });

  return (
    <>
      <Divider sx={{ m: 4 }} variant="middle" />
      <Typography
        sx={{ textDecorationLine: isPromoAdded ? 'line-through' : 'none' }}
        variant="h2"
        fontSize={30}
        fontFamily={`font-family: sans-serif`}
        color="#006666"
        margin={1}
      >
        {SERVICE_MESSAGES.total}
        {`${totalCostCart}$`}
      </Typography>
      {isPromoAdded && (
        <Typography
          variant="h2"
          fontSize={30}
          fontFamily={`font-family: sans-serif`}
          color="#006666"
          margin={1}
        >
          {SERVICE_MESSAGES.total}
          {`${promoPrice}$`}
        </Typography>
      )}
      <Divider sx={{ m: 4 }} variant="middle" />
      {isPromoAdded &&
        promoApplied.map((item) => {
          return (
            <Box sx={{ marginTop: 2, marginBottom: 2 }} key={item}>
              <Typography
                variant="h2"
                fontSize={18}
                fontFamily={`font-family: sans-serif`}
                color="#006666"
              >
                {item}
                <Button
                  onClick={() => dropPromoHandler(item)}
                  sx={{ marginLeft: 1 }}
                  size="small"
                  color="success"
                  variant="outlined"
                >
                  {SERVICE_MESSAGES.drop}
                </Button>
              </Typography>
            </Box>
          );
        })}
      <TextField
        color="success"
        id="outlined-name"
        label="Enter promo code"
        value={name}
        onChange={handleChange}
      />
      <Typography
        variant="h2"
        fontSize={18}
        fontFamily={`font-family: sans-serif`}
        color="rgb(212, 212, 212)"
        margin={1}
      >
        {PROMO.test}
      </Typography>
      {isPromo &&
        Promo.map((item) => {
          return (
            <Box sx={{ marginTop: 2 }} key={item}>
              <Typography
                variant="h2"
                fontSize={18}
                fontFamily={`font-family: sans-serif`}
                color="#006666"
              >
                {item}
                <Button
                  onClick={() => addPromoHandler(item)}
                  sx={{ marginLeft: 1 }}
                  size="small"
                  color="success"
                  variant="outlined"
                >
                  {SERVICE_MESSAGES.add}
                </Button>
              </Typography>
            </Box>
          );
        })}
    </>
  );
};
