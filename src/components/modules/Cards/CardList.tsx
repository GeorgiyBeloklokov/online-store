import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FlowersType } from '../../types/types';
import { SERVICE_MESSAGES } from '../../utils/constants';
import { CardItem } from './CardItem';

interface ICardList {
  cards: FlowersType[];
  isGrid: string;
  isGridQuery: string;
  setCart: (arg0: FlowersType[]) => void;
  cart: FlowersType[];
  setTotalQuantity: (arg0: number) => void;
  totalQuantity: number;
}

export const CardList = (props: ICardList) => {
  let cardsLength = props.cards.length;
  if (!cardsLength) {
    return (
      <Typography
        variant="h2"
        fontSize={25}
        style={{ textAlign: 'center', color: '#006666' }}
        fontFamily={`'Pacifico', cursive`}
      >
        {SERVICE_MESSAGES.dontFound}
      </Typography>
    );
  }
  let gridVar = props.isGrid;
  if (props.isGridQuery) {
    gridVar = props.isGridQuery;
  }
  let md = 4;
  if (gridVar === 'true') {
    md = 6;
  }
  return (
    <Grid container spacing={2} sx={{ maxWidth: '1000px', mb: 15 }}>
      {props.cards.map((item) => (
        <Grid item xs={12} md={md} sm={6} key={item.id}>
          <Link to={`/${item.id}/${item.name}`} key={item.id} style={{ textDecoration: 'none' }}>
            <CardItem
              key={item.id}
              cards={item}
              isGrid={props.isGrid}
              isGridQuery={props.isGridQuery}
              setCart={props.setCart}
              cart={props.cart}
              totalQuantity={props.totalQuantity}
              setTotalQuantity={props.setTotalQuantity}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
