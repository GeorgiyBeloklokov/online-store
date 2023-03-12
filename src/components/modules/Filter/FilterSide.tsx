import { Box } from '@mui/system';
import { SearchCard } from '../Search/SearchCard';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import { FilterCheckbox } from './FilterCheckbox';
import { Typography } from '@mui/material';
import {
  arrFamily,
  arrFamilyNoSet,
  arrPrice,
  arrShop,
  arrShopNoSet,
  arrStock,
  SERVICE_MESSAGES,
} from '../../utils/constants';
import FilterDuoSlider from './FilterDuoSlider';
import { FilterCopy } from '../FilterButtons/FilterCopy';
import { FilterReset } from '../FilterButtons/FilterReset';

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
};

const boxFilterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '5px',
  bgcolor: '#F7F7FA',
  padding: '15px',
  width: '250px',
  mb: '20px',
  flexDirection: 'column',
};

export let listFamily = arrFamily.slice(0);
export let listShop = arrShop.slice(0);
export let listPrice = arrPrice.slice(0);
export let listStock = arrStock.slice(0);
let checkedFamily: string[] = [];
let checkedShop: string[] = [];
let checkedPrice: number[] = [];
let checkedStock: number[] = [];

export const FilterSide = ({
  filter,
  setFilter,
  searchQuery,
  famQuery,
  params,
  handleChange,
  cards,
  shopQuery,
  priceQuery,
  stockQuery,
  setSearchParams,
  sortedCards,
}: {
  filter: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  searchQuery: string;
  famQuery: string;
  shopQuery: string;
  priceQuery: string;
  stockQuery: string;
  params: Iparams;
  handleChange: () => void;
  cards: FlowersType[];
  setSearchParams: () => void;
  sortedCards: FlowersType[];
}) => {
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter, query: e.target.value });
    if (e.target.value) params.search = e.target.value;
    handleChange();
  }
  return (
    <Box sx={{ maxWidth: '300px', mb: 10 }}>
      <Box sx={{ display: 'flex', gap: '10px', mb: '20px' }}>
        <FilterCopy />
        <FilterReset setSearchParams={setSearchParams} setFilter={setFilter} filter={filter} />
      </Box>
      <Box sx={boxStyle}>
        <SearchCard
          onChange={(e) => {
            inputHandler(e);
          }}
          value={filter.query}
          searchQuery={searchQuery}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>{SERVICE_MESSAGES.family}</Typography>
        <FilterCheckbox
          setFil={{ ...filter, familyFilter: checkedFamily }}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          paramQuery={famQuery}
          paramsFil={'fam'}
          cards={cards}
          listOfFilter={listFamily}
          checkedArr={checkedFamily}
          sortBy={'family'}
          arrSort={arrFamily}
          arrNoSet={arrFamilyNoSet as string[]}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>{SERVICE_MESSAGES.shop}</Typography>
        <FilterCheckbox
          setFil={{ ...filter, familyFilter: checkedShop }}
          setFilter={setFilter}
          handleChange={handleChange}
          params={params}
          paramQuery={shopQuery}
          paramsFil={'shop'}
          cards={cards}
          listOfFilter={listShop}
          checkedArr={checkedShop}
          sortBy={'shop'}
          arrSort={arrShop}
          arrNoSet={arrShopNoSet as string[]}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>{SERVICE_MESSAGES.price}</Typography>
        <FilterDuoSlider
          listOfFilter={listPrice}
          setFil={{ ...filter, priceFilter: checkedPrice }}
          checkedArr={checkedPrice}
          setFilter={setFilter}
          paramQuery={priceQuery}
          handleChange={handleChange}
          params={params}
          paramsFil={'price'}
          unit={'$'}
          sortedCards={sortedCards}
        />
      </Box>
      <Box sx={boxFilterStyle}>
        <Typography sx={{ fontSize: '24px' }}>{SERVICE_MESSAGES.stock}</Typography>
        <FilterDuoSlider
          listOfFilter={listStock}
          setFil={{ ...filter, stockFilter: checkedStock }}
          checkedArr={checkedStock}
          setFilter={setFilter}
          paramQuery={stockQuery}
          handleChange={handleChange}
          params={params}
          paramsFil={'stock'}
          unit={'pcs'}
          sortedCards={sortedCards}
        />
      </Box>
    </Box>
  );
};
