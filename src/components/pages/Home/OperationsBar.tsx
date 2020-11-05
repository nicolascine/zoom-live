import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Session } from '../../../store/sessions/types';

const OperationsBar: React.FC<{
  handleSortByValue: Function;
  handleFilterByValue: Function;
  data: Session[];
}> = ({ ...props }) => {
  const [sortByDuration, setSortByDuration]: [
    sortByDuration: null | string,
    setSortByDuration: Function
  ] = useState(null);

  const [sortByCost, setSortByCost]: [
    sortByCost: null | string,
    setSortByCost: Function
  ] = useState(null);

  const [filterByDuration, setFilterByDuration]: [
    filterByDuration: null | string,
    setFilterByDuration: Function
  ] = useState(null);

  const [filterByCost, setFilterByCost]: [
    filterByCost: null | string,
    setFilterByCost: Function
  ] = useState(null);

  const handleFilterByDuration = (eventKey: string | null) => {
    setFilterByDuration(eventKey);
    props.handleFilterByValue('duration', Number(eventKey));
  };

  const handleFilterByCost = (eventKey: string | null) => {
    setFilterByCost(eventKey);
    props.handleFilterByValue('cost', Number(eventKey));
  };

  const [filterByDurationList, setFilterByDurationList]: [
    filterByDurationList: any,
    setFilterByDurationList: Function
  ] = useState(null);

  useEffect(() => {
    if (props.data && props.data.length) {
      const uniqueValues = props.data
        .map((item: Session) => item.duration)
        .filter((value, index, self) => self.indexOf(value) === index);
      setFilterByDurationList(uniqueValues);
    }
  }, [props.data]);

  const [filterByCostList, setFilterByCostList]: [
    filterByCostList: any,
    setFilterByDurationList: Function
  ] = useState(null);

  useEffect(() => {
    if (props.data && props.data.length) {
      const uniqueValues = props.data
        .map((item: Session) => item.cost)
        .filter((value, index, self) => self.indexOf(value) === index);
      setFilterByCostList(uniqueValues);
    }
  }, [props.data]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ justifyContent: 'center' }}
    >
      <div className="justify-content-md-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={(e: React.SyntheticEvent) => {
                const sort =
                  sortByDuration === null || sortByDuration === 'asc'
                    ? 'desc'
                    : 'asc';
                setSortByDuration(sort);
                setSortByCost(null);
                props.handleSortByValue('duration', sort);
              }}
            >
              Sort by duration{' '}
              {sortByDuration && (
                <>
                  {sortByDuration === 'desc' ? (
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-down"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      ></path>
                    </svg>
                  )}
                </>
              )}
            </button>
          </li>
          <li className="nav-item active">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={(e: React.SyntheticEvent) => {
                const sort =
                  sortByCost === null || sortByCost === 'asc' ? 'desc' : 'asc';
                setSortByDuration(null);
                setSortByCost(sort);
                props.handleSortByValue('cost', sort);
              }}
            >
              Sort by cost{' '}
              {sortByCost && (
                <>
                  {sortByCost === 'desc' ? (
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-down"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      ></path>
                    </svg>
                  )}
                </>
              )}
            </button>
          </li>
          <li>
            <Nav
              variant="pills"
              activeKey="1"
              onSelect={handleFilterByDuration}
            >
              <NavDropdown
                className="btn btn-outline-primary btn-sm"
                title={`Filter by duration ${
                  filterByDuration !== null ? filterByDuration : ''
                }`}
                id="nav-dropdown-by-duration"
              >
                {filterByDurationList &&
                  filterByDurationList.map((item: number) => (
                    <NavDropdown.Item eventKey={item.toString()}>
                      {item} minutes
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </li>

          <li>
            <Nav variant="pills" activeKey="1" onSelect={handleFilterByCost}>
              <NavDropdown
                className="btn btn-outline-primary btn-sm"
                title={`Filter by cost ${
                  filterByCost !== null ? filterByCost : ''
                }`}
                id="nav-dropdown-by-cost"
              >
                {filterByCostList &&
                  filterByCostList.map((item: number) => (
                    <NavDropdown.Item eventKey={item.toString()}>
                      {item}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default OperationsBar;
