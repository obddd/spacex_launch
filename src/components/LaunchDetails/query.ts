import gql from 'graphql-tag';

const QUERY_LAUNCH_DETAILS = gql`
  query launchInfo($id: String) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
      }
    }
  }
`;
export default QUERY_LAUNCH_DETAILS;
