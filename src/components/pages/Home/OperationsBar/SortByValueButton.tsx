import React, { useState, useEffect } from 'react';

const SortByValueButton: React.FC<{
  text: string;
  handleSortByValue: Function;
  filterName: string;
  currentSelectedFilter: string | null;
}> = ({ text, handleSortByValue, filterName, currentSelectedFilter }) => {
  const [sortByValue, setSortByValue]: [
    sortByValue: null | string,
    setSortByValue: Function
  ] = useState(null);

  useEffect(() => {
    if (sortByValue) handleSortByValue(sortByValue);
  }, [sortByValue]);

  useEffect(() => {
    if (filterName !== currentSelectedFilter) setSortByValue(null);
  }, [currentSelectedFilter]);

  return (
    <span
      onClick={(e: React.SyntheticEvent) => {
        setSortByValue(
          sortByValue === null || sortByValue === 'asc' ? 'desc' : 'asc'
        );
      }}
    >
      {text}
      {sortByValue && (
        <>
          {sortByValue === 'desc' ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          ) : (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-up"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              ></path>
            </svg>
          )}
        </>
      )}
    </span>
  );
};

export default SortByValueButton;
