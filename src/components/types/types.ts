export interface FlowersType {
  [key: string]: number | string | undefined | string[];
  id?: number;
  name: string;
  photos: string[];
  description: string;
  discount?: number;
  rating?: number;
  stock?: number;
  family?: string;
  genus?: string;
  price: number;
  quantity: number;
  priceTotal?: number;
  shop?: string;
}

export interface Iparams {
  [key: string]: string;
}

export interface ICardsFiter {
  sort: string;
  query: string;
  familyFilter: string[];
  shopFilter: string[];
  priceFilter: number[];
  stockFilter: number[];
}
