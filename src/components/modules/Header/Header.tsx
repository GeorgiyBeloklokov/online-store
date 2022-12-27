import { AppBar, Badge, IconButton, Toolbar, Typography, Link, Box } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon style={{ color: '#006666' }} />
          </IconButton>
        </Box>
        <Typography
          variant="h1"
          fontSize={35}
          sx={{ flexGrow: 1 }}
          fontFamily={`'Pacifico', cursive`}
        >
          <Link href="#" underline="none" color="#006666">
            My Flowers
          </Link>
        </Typography>
        <Typography sx={{ color: '#006666' }} fontFamily={`'Raleway', sans-serif`}>
          Cart total: $0.00
        </Typography>
        <IconButton color="inherit">
          <Badge color="secondary">
            {<AddShoppingCartOutlinedIcon style={{ color: '#006666' }} sx={{ fontSize: 30 }} />}
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
