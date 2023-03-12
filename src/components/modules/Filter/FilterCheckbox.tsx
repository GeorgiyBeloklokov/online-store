import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';

interface IProps {
  setFil: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  handleChange: () => void;
  params: Iparams;
  paramQuery: string;
  paramsFil: string;
  cards: FlowersType[];
  listOfFilter: string[];
  checkedArr: string[];
  sortBy: string;
  arrSort: string[];
  arrNoSet: string[];
}

let countCards: FlowersType[];

export const FilterCheckbox = (props: IProps) => {
  let {
    setFil,
    handleChange,
    params,
    paramQuery,
    cards,
    listOfFilter,
    checkedArr,
    sortBy,
    arrSort,
    arrNoSet,
    setFilter,
    paramsFil,
  } = props;
  const handleChangeCheckbox = (e: SyntheticEvent<Element, Event>) => {
    const name = e.target as HTMLInputElement;
    const value = name.value;
    checkedArr = listOfFilter;
    if (name.checked) {
      if (checkedArr.length >= arrSort.length && !paramQuery) checkedArr = [];
      checkedArr.push(value);
      setFilter(setFil);
    } else {
      checkedArr.splice(checkedArr.indexOf(value), 1);
      if (checkedArr.length === 0) checkedArr = arrSort.slice(0);
      setFilter(setFil);
    }
    listOfFilter = checkedArr;
    if (listOfFilter.length >= arrSort.length) {
      params[paramsFil] = '';
      handleChange();
    } else {
      params[paramsFil] = listOfFilter.join('&');
      handleChange();
    }
  };
  if (paramQuery) listOfFilter = paramQuery.split('&');
  if (cards.length !== 0) {
    countCards = cards;
  } else {
    countCards = [];
  }
  return (
    <FormGroup>
      {arrSort.map((item) => {
        if (listOfFilter.includes(item) && listOfFilter.length < arrSort.length) {
          return (
            <FormControlLabel
              defaultValue=""
              key={item}
              control={
                <Checkbox
                  onChange={handleChangeCheckbox}
                  checked={true || false}
                  sx={{
                    '&.Mui-checked': {
                      color: '#006666',
                    },
                  }}
                />
              }
              label={`${item} ${countCards.filter((card) => card[sortBy] === item).length}/${
                arrNoSet.filter((el) => el === item).length
              }`}
              value={item || ''}
            />
          );
        } else {
          return (
            <FormControlLabel
              defaultValue=""
              key={item}
              control={
                <Checkbox
                  onChange={handleChangeCheckbox}
                  checked={false || false}
                  sx={{
                    '&.Mui-checked': {
                      color: '#006666',
                    },
                  }}
                />
              }
              label={`${item} ${countCards.filter((card) => card[sortBy] === item).length}/${
                arrNoSet.filter((el) => el === item).length
              }`}
              value={item || ''}
            />
          );
        }
      })}
    </FormGroup>
  );
};
