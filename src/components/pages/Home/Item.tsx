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
      <div className="mb-4" style={{ borderRadius: '10px' }}>
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
        <div>
          <p className="card-text" style={{ marginBottom: '0px' }}>
            {props.name}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <small style={{ color: '#aaa' }}>
              <svg
                width="1.3em"
                height="1.2em"
                viewBox="0 0 18 20"
                className="bi bi-clock"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
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
