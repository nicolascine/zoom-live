import React, { useState } from 'react';
import { Session } from '../../../../store/sessions/types';
import SortByValueButton from './SortByValueButton';
import FilterByValueButton from './FilterByValueButton';

const OperationsBar: React.FC<{
  handleSortByValue: Function;
  handleFilterByValue: Function;
  handleResetFilters: Function;
  data: Session[];
}> = ({ ...props }) => {
  const [selectedFilter, setSelectedFilter]: [
    null | string,
    Function
  ] = useState(null);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ justifyContent: 'center' }}
    >
      <div className="justify-content-md-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <SortByValueButton
              text={'Sort by duration'}
              filterName="SortByDuration"
              currentSelectedFilter={selectedFilter}
              handleSortByValue={(direction: string) => {
                props.handleSortByValue('duration', direction);
                setSelectedFilter('SortByDuration');
              }}
            />
          </li>
          <li className="nav-item active">
            <SortByValueButton
              text={'Sort by cost'}
              filterName="SortByCost"
              currentSelectedFilter={selectedFilter}
              handleSortByValue={(direction: string) => {
                props.handleSortByValue('cost', direction);
                setSelectedFilter('SortByCost');
              }}
            />
          </li>
          <li>
            <FilterByValueButton
              title="Filter by duration"
              filterName="FilterByDuration"
              currentSelectedFilter={selectedFilter}
              onSelect={(eventKey: string) => {
                props.handleFilterByValue('duration', Number(eventKey));
                setSelectedFilter('FilterByDuration');
              }}
              data={props.data}
              keyName={'duration'}
            />
          </li>
          <li>
            <FilterByValueButton
              title="Filter by cost"
              filterName="FilterByCost"
              currentSelectedFilter={selectedFilter}
              onSelect={(eventKey: string) => {
                props.handleFilterByValue('cost', Number(eventKey));
                setSelectedFilter('FilterByCost');
              }}
              data={props.data}
              keyName={'cost'}
            />
          </li>
          <li>
            <span
              onClick={(e: React.SyntheticEvent) => {
                props.handleResetFilters();
                setSelectedFilter(null);
              }}
            >
              reset filters
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default OperationsBar;
