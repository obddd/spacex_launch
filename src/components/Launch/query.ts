import gql from 'graphql-tag';

const QUERY_LAUNCH = gql`
  query launch {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default QUERY_LAUNCH;
