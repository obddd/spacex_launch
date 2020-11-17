import React from 'react';
import { LaunchQuery } from '../../generated/graphql';

interface Props {
  data: LaunchQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>All spaceX launches</h3>
      {!!data.launches &&
        data.launches?.map(
          (launch, i) => !!launch && <p key={i}>{launch.mission_name}</p>
        )}
    </div>
  );
};

export default Launch;
