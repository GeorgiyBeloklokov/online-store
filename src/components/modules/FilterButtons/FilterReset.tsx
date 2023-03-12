import { Dispatch, SetStateAction } from 'react';
import { ICardsFiter } from '../../types/types';
import { params, SERVICE_MESSAGES } from '../../utils/constants';
import { FilterButton } from './FilterButton';

export const FilterReset = ({
  setSearchParams,
  setFilter,
  filter,
}: {
  setSearchParams: () => void;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  filter: ICardsFiter;
}) => {
  function handleClick() {
    setSearchParams();
    setFilter({ ...filter, sort: '' });
    delete params['sort'];
  }
  return (
    <FilterButton variant="outlined" onClick={handleClick}>
      {SERVICE_MESSAGES.resetFilters}
    </FilterButton>
  );
};
