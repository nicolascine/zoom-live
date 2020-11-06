import React, { useState, useEffect } from 'react';
import { Session } from '../../../../store/sessions/types';
import { Nav, NavDropdown } from 'react-bootstrap';

const FilterByValueButton: React.FC<{
  title: string;
  keyName: string;
  onSelect: Function;
  data: Session[];
  filterName: string;
  currentSelectedFilter: string | null;
}> = ({
  title,
  keyName,
  onSelect,
  data,
  filterName,
  currentSelectedFilter,
}) => {
  const [filterByValue, setFilterByValue]: [
    filterByValue: null | string,
    setFilterByValue: Function
  ] = useState(null);

  const [uniqueList, setUniqueList]: [
    uniqueList: any,
    setUniqueList: Function
  ] = useState(null);

  useEffect(() => {
    if (filterByValue) onSelect(filterByValue);
  }, [filterByValue]);

  useEffect(() => {
    if (filterName !== currentSelectedFilter) setFilterByValue(null);
  }, [currentSelectedFilter]);

  useEffect(() => {
    if (data && data.length) {
      const uniqueValues = data
        .map((item: Session | any) => item[keyName])
        .filter((value, index, self) => self.indexOf(value) === index);
      setUniqueList(uniqueValues);
    }
  }, [data]);

  return (
    <Nav
      variant="pills"
      activeKey="1"
      onSelect={(eventKey: string | number | null) =>
        setFilterByValue(eventKey)
      }
    >
      {data && (
        <NavDropdown
          title={`${title} ${filterByValue !== null ? filterByValue : ''}`}
          id={`nav-dropdown-by-${keyName}`}
        >
          {uniqueList &&
            uniqueList.map((item: number, index: number) => (
              <NavDropdown.Item
                key={index.toString()}
                eventKey={item.toString()}
              >
                {item}
                {keyName === 'duration' ? ' minutes' : ''}
              </NavDropdown.Item>
            ))}
        </NavDropdown>
      )}
    </Nav>
  );
};

export default FilterByValueButton;
