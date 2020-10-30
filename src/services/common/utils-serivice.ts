import { orderBy } from 'lodash-es';

/**
 * Receive a list of values and return sorted by value
 * @param list
 * @param objectKey
 * @param order
 */
export const sortBy = (
  list: { [k: string]: any },
  key: string,
  direction: boolean | 'desc' | 'asc' = 'desc'
) => {
  return list.map((item: any) => orderBy(list, [key], [direction]))[0];
};
