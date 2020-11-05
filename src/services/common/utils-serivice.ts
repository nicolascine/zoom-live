import { orderBy, reduce } from 'lodash-es';
import moment from 'moment';

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
 * Convert Unix timestamp to date
 * @param date: Number
 * @param format: String
 */
export const unixTimestampToDate = (date: number, format: string) => {
  return moment.unix(date).format(format);
};

/**
 * Truncate text using a defined max value
 * @param text: String
 * @param splitValue: Number
 */
export const truncateText = (text: string, splitValue: number) => {
  let value: string | null = '';
  if (text.length >= splitValue) {
    value = `${text.slice(0, splitValue)}...`;
  } else {
    value = text;
  }
  return value;
};
