import React from 'react';
import { LaunchQuery } from '../../generated/graphql';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';

interface Props {
  data: LaunchQuery;
}

const Launch: React.FC<Props> = ({ data: { launches } }) => {
  return (
    <div>
      {!!launches &&
        launches?.map(
          (launch, i) =>
            !!launch && (
              <div key={i} className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-9">
                    <h4>
                      Mission:{' '}
                      <span
                        className={classNames({
                          'text-success': launch.launch_success,
                          'text-danger': !launch.launch_success,
                        })}
                      >
                        {launch.mission_name}
                      </span>
                    </h4>
                    <p>
                      Date:{' '}
                      {moment(launch.launch_date_local).format(
                        'YYYY-MM-DD HH:mm'
                      )}
                    </p>
                  </div>
                  <div className="d-flex col-md-3 justify-content-center align-items-center">
                    <Link
                      to={`/launch/${launch.flight_number}`}
                      className="btn btn-secondary"
                    >
                      Launch Info
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default Launch;
