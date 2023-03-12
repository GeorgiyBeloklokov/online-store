import { useMemo } from 'react';
import { FlowersType } from '../types/types';
import { arrFamily, arrPrice, arrShop, arrStock } from '../utils/constants';

export const useSortedCards = (cards: FlowersType[], sort: string, sortQuery: string) => {
  if (sortQuery) sort = sortQuery;
  const sortedCards = useMemo(() => {
    if (sort) {
      return [...cards].sort((a, b) => {
        if (sort.includes('2')) {
          const sliced = sort.slice(0, -1);
          if (typeof a[sliced as keyof FlowersType] == 'number') {
            let first = b[sliced] as number;
            let second = a[sliced] as number;
            return first - second;
          } else {
            let first = b[sliced] as string;
            let second = a[sliced] as string;
            return first.localeCompare(second);
          }
        } else {
          if (typeof a[sort as keyof FlowersType] == 'number') {
            let first = b[sort] as number;
            let second = a[sort] as number;
            return second - first;
          } else {
            let first = b[sort] as string;
            let second = a[sort] as string;
            return second.localeCompare(first);
          }
        }
      });
    } else {
      return cards;
    }
  }, [sort, cards]);
  return sortedCards;
};

export const useCards = (
  cards: FlowersType[],
  sort: string,
  query: string,
  listFamily: string[],
  listShop: string[],
  listPrice: number[],
  listStock: number[],
  searchQuery: string,
  sortQuery: string,
  famQuery: string,
  shopQuery: string,
  priceQuery: string,
  stockQuery: string
) => {
  const sortedCards = useSortedCards(cards, sort, sortQuery);
  if (searchQuery.length > 1) query = searchQuery as string;
  if (famQuery) listFamily = famQuery.split('&');
  if (listFamily.length === 0) listFamily = arrFamily;
  if (shopQuery) listShop = shopQuery.split('&');
  if (listShop.length === 0) listShop = arrShop;
  if (priceQuery) listPrice = priceQuery.split('&').map((el) => Number(el));
  if (listPrice.length === 0) listPrice = arrPrice;
  if (stockQuery) listStock = stockQuery.split('&').map((el) => Number(el));
  if (listStock.length === 0) listStock = arrStock;
  const sortedAndSearchedcards = sortedCards
    .filter((card) => {
      return (
        card.name.toLowerCase().includes(query.toLowerCase()) ||
        card.description.toLowerCase().includes(query.toLowerCase()) ||
        (card.family as string).toLowerCase().includes(query.toLowerCase()) ||
        (card.genus as string).toLowerCase().includes(query.toLowerCase()) ||
        (card.shop as string).toLowerCase().includes(query.toLowerCase()) ||
        card.price.toString().includes(query.toLowerCase()) ||
        (card.discount as number).toString().includes(query.toLowerCase()) ||
        (card.stock as number).toString().includes(query.toLowerCase()) ||
        (card.rating as number).toString().includes(query.toLowerCase())
      );
    })
    .filter((card) => listFamily.includes(card.family as string))
    .filter((card) => listShop.includes(card.shop as string))
    .filter((card) => card.price <= listPrice[1] && card.price >= listPrice[0])
    .filter(
      (card) => (card.stock as number) <= listStock[1] && (card.stock as number) >= listStock[0]
    );
  return sortedAndSearchedcards;
};
