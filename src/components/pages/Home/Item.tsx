import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import {
  unixTimestampToDate,
  truncateText,
} from '../../../services/common/utils-serivice';
import config from '../../../config';

import { Session } from '../../../store/sessions/types';

const Item: React.FC<Session> = (props) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <Link to={`/session/${props.id}`}>
          <div className="overlay-effect">
            {
              <LazyImage
                src={
                  props.profile_img_url
                    ? props.profile_img_url
                    : config.NO_IMAGE_PLACEHOLDER(props.name)
                }
                alt={props.name}
              />
            }
            <div className="caption">
              <span>
                {props.description
                  ? truncateText(
                      props.description,
                      config.MAX_LENGTH_ITEM_DESCRIPTION
                    )
                  : props.name}
              </span>
            </div>
          </div>
        </Link>
        <div className="card-body">
          <p className="card-text">{props.name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {unixTimestampToDate(
                props.start_time,
                config.DISPLAY_DATE_FORMAT
              )}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
