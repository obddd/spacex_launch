import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchInfo from './LaunchInfo';

const LaunchInfoContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({variables: {id: '13'}});

  if (loading) {
    return <div>Data is loading</div>;
  }

  if (!data || error) {
    return <div>Error while fetching data</div>;
  }

  return <LaunchInfo data={data} />;
};

export default LaunchInfoContainer;
