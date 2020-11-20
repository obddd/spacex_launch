import React from 'react';
import { LaunchQuery } from '../../generated/graphql';
import classNames from 'classnames';

interface Props {
  data: LaunchQuery;
}

const Launch: React.FC<Props> = ({ data: { launches } }) => {
  // console.log(data);
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
                    <p>Date: {launch.launch_date_local}</p>
                  </div>
                  <div className="d-flex col-md-3 justify-content-center align-items-center">
                    <button className="btn btn-secondary">Launch Info</button>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default Launch;
