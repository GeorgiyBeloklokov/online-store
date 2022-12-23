import { useMemo } from 'react';
import { FlowersType } from '../types/types';

export const useSortedCards = (cards: FlowersType[], sort: string) => {
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
