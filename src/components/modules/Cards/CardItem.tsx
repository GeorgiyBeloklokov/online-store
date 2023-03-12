import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import { FlowersType } from '../../types/types';
import { ButtonCard } from '../ButtonCard/ButtonCard';

interface Icards {
  key: number | undefined;
  cards: FlowersType;
  isGrid: string;
  isGridQuery: string;
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

const priceBoxSX = {
  display: 'flex',
  padding: '0 16px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const CardItem = (props: Icards) => {
  const { name, price, rating, description, photos } = props.cards;
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={photos[0]}
        alt={name}
        sx={{ objectPosition: '50% 70%' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '3',
            height: '60px',
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box sx={priceBoxSX}>
        <Typography>{price}$</Typography>
        <ButtonCard
          cards={props.cards}
          setCart={props.setCart}
          cart={props.cart}
          totalQuantity={props.totalQuantity}
          setTotalQuantity={props.setTotalQuantity}
        />
      </Box>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
        sx={{ padding: '0 0 10px 16px' }}
      />
    </Card>
  );
};
