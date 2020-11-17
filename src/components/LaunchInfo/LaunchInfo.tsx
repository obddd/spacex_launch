import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';

interface Props {
  data: LaunchInfoQuery;
}

const LaunchInfo: React.FC<Props> = ({ data }) => {
  console.log(data);
  if (!data.launch) {
    return <div>No such Launch</div>;
  }
  return (
    <div>
      <h3>All launches info</h3>
      <p>{data.launch.flight_number}</p>
    </div>
  );
};

export default LaunchInfo;
