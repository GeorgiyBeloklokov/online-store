import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';
import { FlowersType, Iparams } from '../../types/types';
import { BUTTONS, SERVICE_MESSAGES } from '../../utils/constants';
import Pagination from '../../utils/Pagination';
import CartModal from './CartModal';
import { CartPromo } from './CartPromo';

interface ICartItem {
  pagesPerPage: FlowersType[];
  totalQuantity: number;
  cart: FlowersType[];
  totalCostCart: number;
  augmentHandler: (name: string) => void;
  decrementHandler: (name: string) => void;
  setSearchParams: (arg0: Iparams) => void;
  setTotalQuantity: (arg0: number) => void;
  setCart: (arg0: FlowersType[]) => void;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export const CartItem = ({
  setCart,
  setTotalQuantity,
  setSearchParams,
  pagesPerPage,
  totalQuantity,
  cart,
  totalCostCart,
  augmentHandler,
  decrementHandler,
  open,
  setOpen,
}: ICartItem) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CartModal
        handleClose={handleClose}
        open={open}
        setTotalQuantity={setTotalQuantity}
        setCart={setCart}
      />
      {pagesPerPage.length ? (
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontSize={30}
            sx={{ flexGrow: 1, m: 5 }}
            fontFamily={`font-family: sans-serif`}
            color="#006666"
          >
            {SERVICE_MESSAGES.yourCart}
            {totalQuantity}
          </Typography>
          <Pagination setSearchParams={setSearchParams} cart={cart} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  border: 1,
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
                  noWrap
                >
                  {SERVICE_MESSAGES.products}
                  {totalQuantity}
                </Typography>
                <CartPromo totalCostCart={totalCostCart} />
              </Box>
              <Button
                onClick={handleOpen}
                color="success"
                fullWidth
                sx={{ mb: 2 }}
                variant="outlined"
              >
                {SERVICE_MESSAGES.buyNow}
              </Button>
              <Button component={RouterLink} to="/" color="success" fullWidth variant="outlined">
                {SERVICE_MESSAGES.buyMore}
              </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              {pagesPerPage?.map((item, index) => {
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
                        width: '25%',
                      }}
                      image={item.photos[0]}
                      alt="Plant image"
                    />
                    <Box sx={{ minWidth: { xs: 40, sm: 64 } }}>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.name}
                        {item.name}
                      </Typography>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.genus}
                        {item.genus}
                      </Typography>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 14 } }}
                        align="left"
                      >
                        {SERVICE_MESSAGES.stock}
                        {item.stock}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: 14 }}>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        sx={{ textAlign: 'center', fontSize: { xs: 20, sm: 27 } }}
                      >
                        {item.priceTotal ? item.priceTotal : item.price}$
                      </Typography>
                      <Typography
                        fontFamily={`font-family: sans-serif`}
                        color="#006666"
                        margin={1}
                        sx={{ fontSize: { xs: 12, sm: 13 } }}
                        align="justify"
                      >
                        {SERVICE_MESSAGES.numberOfProduct}
                        {index + 1}
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        color="success"
                        onClick={() => {
                          augmentHandler(item.name);
                        }}
                        sx={{ minWidth: { xs: 33, sm: 64 } }}
                        variant="outlined"
                      >
                        {BUTTONS.plus}
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
                        color="success"
                        onClick={() => {
                          decrementHandler(item.name);
                        }}
                        sx={{ minWidth: { xs: 40, sm: 64 } }}
                        variant="outlined"
                      >
                        {BUTTONS.minus}
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Box sx={{ position: 'absolute', top: '40%', left: '45%' }}>
          <Typography variant="h2" fontSize={35} color="#006666">
            {SERVICE_MESSAGES.cartEmpty}
          </Typography>
          <Link
            style={{
              display: 'inline-block',
              position: 'relative',
              marginTop: '20px',
              fontWeight: '500',
              textDecoration: 'none',
              borderRadius: '8px',
              color: ' #fff',
              textTransform: 'uppercase',
              padding: '8px 12px',
              background: '#006666',
              fontSize: '15px',
              transition: '0.2s all',
            }}
            to="/"
          >
            {SERVICE_MESSAGES.goToBuy}
          </Link>
        </Box>
      )}
    </>
  );
};
