import { flowersData } from '../../../data/data';
import { Link, useParams } from 'react-router-dom';
import { Box, CardActionArea, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import { SERVICE_MESSAGES, typographySX } from '../../utils/constants';
import { FlowersType } from '../../types/types';
import { ButtonCard } from '../../modules/ButtonCard/ButtonCard';
import { useState } from 'react';
import { ButtonSinglePage } from '../../modules/ButtonCard/ButtonSinglePage';

interface ISinglePage {
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function SinglePage(props: ISinglePage) {
  const { id } = useParams();
  const idet = Number(id) - 1;
  let srcImg0 = flowersData[idet].photos[0];
  let srcImg1 = flowersData[idet].photos[1];
  let srcImg = srcImg0;
  const [img, setImg] = useState(srcImg);

  function handleClickAway0() {
    setImg(srcImg0);
  }
  function handleClickAway1() {
    setImg(srcImg1);
  }
  return (
    <Container
      sx={{
        border: 1,
        borderColor: 'grey.500',
        borderRadius: 1,
        marginBottom: 2,
        p: 2,
        boxShadow: 1,
        mt: '20px',
        width: '90%',
        mb: '100px',
      }}
    >
      <Typography
        variant="h2"
        fontSize={30}
        fontFamily={`font-family: sans-serif`}
        color="#006666"
        margin={1}
        noWrap
        textAlign={'center'}
        mb={5}
        sx={{
          whiteSpace: 'normal',
        }}
      >
        <Link to={'/'} style={{ textDecoration: 'none', color: '#006666' }}>
          {SERVICE_MESSAGES.store}
        </Link>
        - {flowersData[idet].shop} - {flowersData[idet].family} - {flowersData[idet].name}
      </Typography>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={4} sm={2}>
          <Box onClick={handleClickAway0}>
            <CardActionArea component="span" sx={{ width: 'fit-content' }}>
              <CardMedia
                component="img"
                sx={{
                  width: '100px',
                  backgroundSize: 'cover',
                  height: '100px',
                  border: '1px solid #006666',
                  borderRadius: '5px',
                  mb: '20px',
                }}
                image={flowersData[idet].photos[0]}
                alt="Plant image"
              />
            </CardActionArea>
          </Box>
          <Box onClick={handleClickAway1}>
            <CardActionArea component="span" sx={{ width: 'fit-content' }}>
              <CardMedia
                component="img"
                sx={{
                  width: '100px',
                  backgroundSize: 'cover',
                  height: '100px',
                  border: '1px solid #006666',
                  borderRadius: '5px',
                }}
                image={flowersData[idet].photos[1]}
                alt="Plant image"
              />
            </CardActionArea>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={4}
          sx={{
            minHeight: '500px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              margin: '0 auto',
              width: '75%',
              maxHeight: '400px',
            }}
            image={img}
            alt="Plant image"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.name} {flowersData[idet].name}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.family} {flowersData[idet].family}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.genus} {flowersData[idet].genus}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.description} {flowersData[idet].description}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.stock} {flowersData[idet].stock}
          </Typography>
          <Typography sx={typographySX}>
            {SERVICE_MESSAGES.shop} {flowersData[idet].shop}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={flowersData[idet].rating}
            precision={0.5}
            readOnly
            sx={{ padding: '0 0 10px 16px' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
        >
          <Typography
            variant="h2"
            fontSize={35}
            sx={{ flexGrow: 1 }}
            fontFamily={`'Pacifico', cursive`}
            color="#006666"
          >
            {flowersData[idet].price}$
          </Typography>
          <ButtonCard
            cards={flowersData[idet]}
            setCart={props.setCart}
            cart={props.cart}
            totalQuantity={props.totalQuantity}
            setTotalQuantity={props.setTotalQuantity}
          />
          <ButtonSinglePage
            cards={flowersData[idet]}
            setCart={props.setCart}
            cart={props.cart}
            totalQuantity={props.totalQuantity}
            setTotalQuantity={props.setTotalQuantity}
            open={props.open}
            setOpen={props.setOpen}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
