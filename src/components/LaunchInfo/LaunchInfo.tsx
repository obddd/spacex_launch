import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

interface Props {
  data: LaunchInfoQuery;
}

const LaunchInfo: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No such Launch</div>;
  }
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    details,
    launch_site: { site_name },
    rocket: { rocket_name, rocket_type },
    links: { video_link },
  }: any = data.launch;
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission: </span>
        {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <p>{details}</p>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_number}</li>
        <li className="list-group-item">Launch Site: {site_name}</li>
        <li className="list-group-item">
          Launch Year: {moment(launch_date_local).format('YYYY')}
        </li>
        <li className="list-group-item">
          Launch Successful:{' '}
          <span
            className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success,
            })}
          >
            {launch_success ? 'Yes' : 'No'}
          </span>
        </li>
      </ul>

      <h4 className="mb-3 mt-3">Rocket Details</h4>

      <ul className="list-group">
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>

      <h4 className="mb-3 mt-3">Watch Launch Video:</h4>
      <ReactPlayer url={video_link} width="auto" height="500px" controls />

      <Link to="/" className="btn btn-secondary mt-3">
        Back
      </Link>
    </div>
  );
};

export default LaunchInfo;
