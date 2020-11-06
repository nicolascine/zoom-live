import React from 'react';
import { Session } from '../../../../store/sessions/types';
import SortByValueButton from './SortByValueButton';
import FilterByValueButton from './FilterByValueButton';

const OperationsBar: React.FC<{
  handleSortByValue: Function;
  handleFilterByValue: Function;
  handleResetFilters: Function;
  data: Session[];
}> = ({ ...props }) => {
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
              handleSortByValue={(direction: string) => {
                props.handleSortByValue('duration', direction);
              }}
            />
          </li>
          <li className="nav-item active">
            <SortByValueButton
              text={'Sort by cost'}
              handleSortByValue={(direction: string) => {
                props.handleSortByValue('cost', direction);
              }}
            />
          </li>
          <li>
            <FilterByValueButton
              title="Filter by duration"
              onSelect={(eventKey: string) =>
                props.handleFilterByValue('duration', Number(eventKey))
              }
              data={props.data}
              keyName={'duration'}
            />
          </li>
          <li>
            <FilterByValueButton
              title="Filter by cost"
              onSelect={(eventKey: string) =>
                props.handleFilterByValue('cost', Number(eventKey))
              }
              data={props.data}
              keyName={'cost'}
            />
          </li>
          <li>
            <span
              onClick={(e: React.SyntheticEvent) => props.handleResetFilters()}
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
