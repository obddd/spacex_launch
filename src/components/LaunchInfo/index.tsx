import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchInfo from './LaunchInfo';
import { useParams } from 'react-router-dom';

const LaunchInfoContainer: React.FC = () => {
  let { flight_number }: any = useParams();

  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: flight_number }
  });

  if (loading) {
    return <div>Data is loading</div>;
  }

  if (!data || error) {
    return <div>Error while fetching data</div>;
  }
  return <LaunchInfo data={data} />;
};

export default LaunchInfoContainer;
