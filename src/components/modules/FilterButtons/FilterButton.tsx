import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

export const FilterButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#006655'),
  width: '50%',
  backgroundColor: '#006666',
  '&:hover': {
    backgroundColor: '#006666bf',
  },
}));
