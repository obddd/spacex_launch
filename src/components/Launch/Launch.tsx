import React from 'react';
import { LaunchQuery } from '../../generated/graphql';

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
              <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-9">
                    <h4>Mission: {launch.mission_name}</h4>
                    <p>Date: {launch.launch_date_local}</p>
                  </div>
                  <div className="col-md-3">
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
