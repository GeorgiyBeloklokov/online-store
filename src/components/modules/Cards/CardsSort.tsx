import { SelectCards } from '../Select/SelectCards';
import { Dispatch, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import { SwitchView } from '../SwitchView/SwitchView';
import { optionsForSort } from '../../utils/constants';

const boxSX = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const CardsSort = ({
  filter,
  setFilter,
  cards,
  sortQuery,
  handleChange,
  setIsGrid,
  params,
  isGrid,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<ICardsFiter>;
  cards: FlowersType[];
  sortQuery: string;
  handleChange: () => void;
  params: Iparams;
  setIsGrid: Dispatch<SetStateAction<string>>;
  isGrid: string;
}) => {
  let sorted = filter.sort;
  return (
    <Box sx={boxSX}>
      <SelectCards
        value={sorted}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        options={optionsForSort}
        handleChange={handleChange}
        params={params}
        sortQuery={sortQuery}
      />
      <Typography variant="h2" fontFamily={`'Pacifico', cursive`} fontSize={25}>
        Found: {cards.length}
      </Typography>
      <SwitchView
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        handleChange={handleChange}
        params={params}
      />
    </Box>
  );
};

export default CardsSort;
