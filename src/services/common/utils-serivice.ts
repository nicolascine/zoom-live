import { orderBy } from 'lodash-es';
import Item from '../../components/pages/Home/Item';

/**
 * Receive a list of values and return sorted by value
 * @param list: Object | Array
 * @param key:  String
 * @param order: String
 */
export const sortByValue = (
  list: { [k: string]: any },
  key: string,
  direction: boolean | 'desc' | 'asc' = 'desc'
) => {
  if (!list.length) return [];
  return list.map((item: any) => orderBy(list, [key], [direction]))[0];
};
