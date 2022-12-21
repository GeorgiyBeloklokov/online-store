import { useEffect, useState } from 'react';
import { Box, Button, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import { flowersData } from '../../../data/data';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Basket({ setTotalQuantity }: { setTotalQuantity: (arg0: number) => void }) {
  const [basket, setBasket] = useState(flowersData.slice(0, 4));

  const totalBasket = basket.reduce(
    (acc, el) => acc + (el.priceTotal ? el.priceTotal : el.price),
    0
  );

  const totalQuantity = basket.reduce((acc, el) => acc + el.quantity, 0);

  useEffect(() => {
    setTotalQuantity(totalQuantity);
  }, [setTotalQuantity, totalQuantity]);

  const augmentHandler = (name: string) => {
    setBasket((basket) => {
      return basket.map((item) => {
        if (item.name === name && item.quantity < item.stock) {
          return {
            ...item,
            quantity: ++item.quantity,
            priceTotal: item.quantity * item.price,
          };
        }
        return item;
      });
    });
  };

  const decrementHandler = (name: string) => {
    setBasket((basket) => {
      return basket
        .map((item) => {
          if (item.name === name) {
            return {
              ...item,
              quantity: --item.quantity,
              priceTotal: item.priceTotal ? item.priceTotal - item.price : undefined,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          fontSize={30}
          sx={{ flexGrow: 1, m: 5 }}
          fontFamily={`font-family: sans-serif`}
          color="#006666"
        >
          Ваша корзина:{totalQuantity}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                border: 1,
                height: '9rem',
                borderColor: 'grey.500',
                borderRadius: 1,
                marginBottom: 2,
                p: 2,
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h2"
                fontSize={30}
                fontFamily={`font-family: sans-serif`}
                color="#006666"
                margin={1}
              >
                Итого:
              </Typography>
              <Divider sx={{ m: 4 }} variant="middle" />
              <Typography
                variant="h2"
                fontSize={30}
                fontFamily={`font-family: sans-serif`}
                color="#006666"
                margin={1}
                textAlign={'right'}
              >
                {`${totalBasket}$`}
              </Typography>
            </Box>
            <Button fullWidth sx={{ mb: 2 }} variant="outlined">
              Оформить заказ
            </Button>
            <Button fullWidth variant="outlined">
              Продолжить покупки
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            {basket.map((item) => {
              return (
                <Box
                  key={item.name}
                  sx={{
                    border: 1,
                    height: '10rem',
                    borderColor: 'grey.500',
                    borderRadius: 1,
                    marginBottom: 2,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    boxShadow: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: '98%',
                      width: '20%',
                    }}
                    image={item.photos[0]}
                    alt="Plant image"
                  />
                  <Typography
                    fontFamily={`font-family: sans-serif`}
                    color="#006666"
                    margin={1}
                    sx={{ fontSize: { xs: 12, sm: 14 } }}
                    align="justify"
                  >
                    Name:{item.name}, Family:{item.family}, Genus:{item.genus}, Stock:{item.stock}
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => {
                        augmentHandler(item.name);
                      }}
                      sx={{ minWidth: { xs: 33, sm: 64 } }}
                      variant="outlined"
                    >
                      +
                    </Button>
                    <Typography
                      fontFamily={`font-family: sans-serif`}
                      color="#006666"
                      sx={{ fontSize: { xs: 20, sm: 25 }, ml: { xs: 1.7, sm: 2.9 } }}
                      variant="h6"
                    >
                      {item.quantity}
                    </Typography>
                    <Button
                      onClick={() => {
                        decrementHandler(item.name);
                      }}
                      sx={{ minWidth: { xs: 40, sm: 64 } }}
                      variant="outlined"
                    >
                      -
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      fontFamily={`font-family: sans-serif`}
                      color="#006666"
                      sx={{ textAlign: 'center', fontSize: { xs: 20, sm: 27 } }}
                    >
                      {item.priceTotal ? item.priceTotal : item.price}$
                    </Typography>
                    <Button>{<DeleteForeverIcon color="error" fontSize="large" />}</Button>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Basket;
