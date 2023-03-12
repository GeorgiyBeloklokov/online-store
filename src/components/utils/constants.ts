import { flowersData } from '../../data/data';
import { Iparams } from '../types/types';

export const SOME_MESSAGE = 'Hello Main Page';

export const LINK_TO_THE_COURSE = 'https://rs.school/js/';

export const PAGE_NOT_FOUND = {
  title: 'Oops!',
  subTitle: '404 - The Page can not be found',
  linkTitle: 'Go to homepage',
};

export const BUTTONS = {
  delete: 'Delete',
  add: 'Add',
  minus: '-',
  plus: '+',
  isPressed: false,
};

export const HEADER_MESSAGES = {
  cartTotal: 'Cart total:',
  myFlowers: 'My Flowers',
};

export const SERVICE_MESSAGES = {
  goToBuy: 'Go to buy',
  cartEmpty: 'Cart empty',
  dontFound: 'Plants not found! Please change your search parameters',
  numberOfProduct: ' №:',
  name: 'Name:',
  family: 'Family:',
  genus: 'Genus:',
  stock: 'Stock:',
  buyNow: 'Buy now',
  buyMore: 'Buy more',
  yourCart: 'Your cart:',
  products: 'Products:',
  total: 'Total:',
  add: 'Add',
  drop: 'Drop',
  price: 'Price:',
  description: 'Description:',
  shop: 'Shop:',
  store: 'Store ',
  copyLink: 'Copy Link',
  copied: 'Copied!',
  resetFilters: 'Reset Filters',
  none: 'none',
};

export const PROMO = {
  rss10: 'RSS - 10%',
  epam10: 'EPAM - 10%',
  test: 'Promo for test: "rs" or "epm"',
};

export const params: Iparams = {};

export const cards = flowersData;

export const optionsForSort = [
  { id: 1, value: 'price', name: 'Sort by price ASC' },
  { id: 2, value: 'price2', name: 'Sort by price DESC' },
  { id: 3, value: 'rating', name: 'Sort by rating ASC' },
  { id: 4, value: 'rating2', name: 'Sort by rating DESC' },
  { id: 5, value: 'name', name: 'Sort by name ASC' },
  { id: 6, value: 'name2', name: 'Sort by name DESC' },
];

export const arrFamilyNoSet = flowersData.map((el) => el.family);
export const arrFamily = Array.from(new Set(flowersData.map((el) => el.family))).sort() as string[];

export const arrShopNoSet = flowersData.map((el) => el.shop);
export const arrShop = Array.from(new Set(flowersData.map((el) => el.shop))).sort() as string[];

export const arrPrice = [
  Math.min(...Array.from(new Set(flowersData.map((el) => el.price)))),
  Math.max(...Array.from(new Set(flowersData.map((el) => el.price)))),
];

export const arrStock = [
  Math.min(...Array.from(new Set(flowersData.map((el) => el.stock as number)))),
  Math.max(...Array.from(new Set(flowersData.map((el) => el.stock as number)))),
];

export const styleCartModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 382,
  overflow: { sx: 'scroll', sm: 'none' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  justifyContent: 'space-between',
};

export const btnSX = {
  border: '1px solid #006666',
  color: '#006666',
  padding: '8px 23px',
  borderRadius: '5px',
  transition: 'all 0.5s',
  '&:hover': {
    color: 'white',
    backgroundColor: '#006666',
  },
};

export const typographySX = {
  fontFamily: 'font-family: sans-serif',
  color: '#006666',
  margin: '8px',
  // sx={{ fontSize: { xs: 12, sm: 14 } }}
  fontSize: '14px',
  align: 'left',
};
