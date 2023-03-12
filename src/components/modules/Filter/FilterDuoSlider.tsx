import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Dispatch, SetStateAction, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FlowersType, ICardsFiter, Iparams } from '../../types/types';
import HeightIcon from '@mui/icons-material/Height';
import { flowersData } from '../../../data/data';

const minDistance = 0;

interface IProps {
  listOfFilter: number[];
  checkedArr: number[];
  setFil: ICardsFiter;
  setFilter: Dispatch<SetStateAction<ICardsFiter>>;
  paramQuery: string;
  handleChange: () => void;
  params: Iparams;
  paramsFil: string;
  unit: string;
  sortedCards: FlowersType[];
}

export default function FilterDuoSlider(props: IProps) {
  let {
    listOfFilter,
    setFil,
    setFilter,
    checkedArr,
    paramQuery,
    params,
    handleChange,
    paramsFil,
    unit,
    sortedCards,
  } = props;
  let intervalValue = [
    Math.min(...Array.from(new Set(sortedCards.map((el) => el[paramsFil] as number)))),
    Math.max(...Array.from(new Set(sortedCards.map((el) => el[paramsFil] as number)))),
  ];

  let val = Array.from(new Set(flowersData.map((el) => el[paramsFil] as number)));
  let maxValue = Math.max(...val);
  let minValue = Math.min(...val);

  let startNum = minValue;
  let endNum = maxValue;
  if (paramQuery) {
    listOfFilter = paramQuery.split('&').map((el) => Number(el));
    startNum = listOfFilter[0];
    endNum = listOfFilter[1];
  }
  const [value, setValue] = useState<number[]>([startNum, endNum]);

  const handleChangeFil = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    checkedArr = [value[0], value[1]];
    setFilter(setFil);
    listOfFilter = checkedArr;
    if (listOfFilter.length === 0) {
      params[paramsFil] = '';
      handleChange();
    } else {
      params[paramsFil] = listOfFilter.join('&');
      handleChange();
    }
  };
  return (
    <Box sx={{ width: 200, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography>
          {intervalValue[0]} {unit}
        </Typography>
        <HeightIcon sx={{ transform: 'rotate(90deg)' }} />
        <Typography>
          {intervalValue[1]} {unit}
        </Typography>
      </Box>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={intervalValue}
        onChange={handleChangeFil}
        valueLabelDisplay="auto"
        disableSwap
        min={minValue}
        max={maxValue}
        step={5}
        sx={{ color: '#006666' }}
        defaultValue={[minValue, maxValue]}
      />
    </Box>
  );
}
