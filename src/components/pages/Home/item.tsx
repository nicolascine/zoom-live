import React from 'react';
import { Link } from 'react-router-dom';
import { Session } from '../../../store/sessions/types';

const Item: React.FC<Session> = (props) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <Link to={`/session/${props.id}`}>
          <div
            style={{
              backgroundImage: `url(${props.profile_img_url})`,
              width: '100%',
              height: '225px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          ></div>
        </Link>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">{props.start_time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
