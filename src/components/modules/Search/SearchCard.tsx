import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export const SearchCard = ({
  value,
  onChange,
  searchQuery,
}: {
  value: string;
  onChange: (query: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}) => {
  if (searchQuery) {
    value = searchQuery as string;
  }
  return (
    <TextField
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label="Search..."
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': { borderColor: '#006666' },
        },
      }}
      InputLabelProps={{ color: 'success' }}
    />
  );
};
