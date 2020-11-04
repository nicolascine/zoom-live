import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import { unixTimestampToDate } from '../../../services/common/utils-serivice';

import { Session } from '../../../store/sessions/types';

const Item: React.FC<Session> = (props) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <Link to={`/session/${props.id}`}>
          <div className="overlay-effect">
            <LazyImage src={props.profile_img_url} alt={props.name} />
            <div className="caption">
              <span>
                {props.description
                  ? props.description.length > 190
                    ? `${props.description.slice(0, 190)}...`
                    : props.description
                  : props.name}
              </span>
            </div>
          </div>
        </Link>
        <div className="card-body">
          <p className="card-text">{props.name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {unixTimestampToDate(props.start_time)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
