import React from 'react';
import { useLaunchQuery } from '../../generated/graphql';
import Launch from './Launch';

const LaunchContainer = () => {
  const { data, error, loading } = useLaunchQuery();

  if (loading) {
    return <div>Data is loading</div>;
  }

  if (error || !data) {
    return <div>Error while fetching data</div>;
  }

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <Launch data={data} />
    </>
  );
};

export default LaunchContainer;
