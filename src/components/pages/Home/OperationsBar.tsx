import React from 'react';

const OperationsBar: React.FC<{ handleSortBy: Function }> = ({ ...props }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="justify-content-md-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={(e: React.SyntheticEvent) =>
                props.handleSortBy('duration', 'asc')
              }
            >
              Sort by duration ASC
            </span>
          </li>
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={(e: React.SyntheticEvent) =>
                props.handleSortBy('duration', 'desc')
              }
            >
              Sort by duration DESC
            </span>
          </li>
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={(e: React.SyntheticEvent) =>
                props.handleSortBy('cost', 'asc')
              }
            >
              Sort by cost ASC
            </span>
          </li>
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={(e: React.SyntheticEvent) =>
                props.handleSortBy('cost', 'desc')
              }
            >
              Sort by cost DESC
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default OperationsBar;
