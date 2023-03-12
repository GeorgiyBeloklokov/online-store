import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { AppBar, Badge, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HEADER_MESSAGES } from '../../utils/constants';

export const Header: React.FC<{ totalQuantity: number; totalCostCart: number }> = ({
  totalQuantity,
  totalCostCart,
}) => {
  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Typography
          variant="h1"
          sx={{ flexGrow: 1, fontSize: { xs: 20, sm: 25 } }}
          fontFamily={`'Pacifico', cursive`}
          color="#006666"
        >
          <Link component={RouterLink} to="/" underline="none" color="#006666">
            {HEADER_MESSAGES.myFlowers}
          </Link>
        </Typography>
        <Typography
          variant="h2"
          sx={{ flexGrow: 1, fontSize: { xs: 20, sm: 25 } }}
          fontFamily={`'Pacifico', cursive`}
          color="#006666"
        >
          {HEADER_MESSAGES.cartTotal} {totalCostCart}$
        </Typography>
        <RouterLink to="/cart">
          <IconButton data-testid="cart-button" color="inherit">
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              overlap="circular"
              color="error"
              data-testid="badge"
              badgeContent={totalQuantity}
            >
              {
                <AddShoppingCartOutlinedIcon
                  data-testid="cart-icon"
                  style={{ color: '#006666' }}
                  sx={{ fontSize: 48, marginTop: 1 }}
                />
              }
            </Badge>
          </IconButton>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};
