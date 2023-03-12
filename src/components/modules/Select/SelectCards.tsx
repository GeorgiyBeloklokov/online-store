import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Iparams } from '../../types/types';
import { SERVICE_MESSAGES } from '../../utils/constants';

interface IOptionSort {
  value: string;
  name: string;
  id: number;
}

export const SelectCards = ({
  options,
  value,
  onChange,
  handleChange,
  params,
  sortQuery,
}: {
  options: IOptionSort[];
  value: string;
  onChange: (sort: string) => void;
  sortQuery: string;
  handleChange: () => void;
  params: Iparams;
}) => {
  if (sortQuery) {
    value = sortQuery;
  }
  function selectHandler(e: SelectChangeEvent<string>) {
    onChange(e.target.value);
    if (e.target.value) params.sort = e.target.value;
    handleChange();
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 215 }} size="small">
      <InputLabel id="demo-select-small">SORT</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="SORT"
        value={value}
        onChange={(e) => {
          selectHandler(e);
        }}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006666',
          },
        }}
        inputProps={{ color: 'success' }}
      >
        <MenuItem value="">
          <em>{SERVICE_MESSAGES.none}</em>
        </MenuItem>
        {options.map((option: IOptionSort) => (
          <MenuItem key={option.id} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
