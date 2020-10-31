import { orderBy, reduce } from 'lodash-es';
import moment from 'moment';
import config from '../../config';

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

/**
 * Receive a list and return filtered using a
 * key:value match
 * @param list: Object | Array
 * @param key:  String
 * @param order: String
 */
export const filterByValue = (
  list: { [k: string]: any },
  key: string,
  value: string
) => {
  if (!list.length) return [];

  return reduce(
    list,
    function (acc: any, obj: any) {
      if (obj[key] === value) {
        acc.push(obj);
      }
      return acc;
    },
    []
  );
};

/**
 * Convert unix timestamp to date string
 * @param date: unix timestap (number)
 */
export const unixTimestampToDate = (date: number) => {
  return moment.unix(date).format(config.DISPLAY_DATE_FORMAT);
};
