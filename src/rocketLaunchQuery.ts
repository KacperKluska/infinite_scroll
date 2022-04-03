import { gql } from "@apollo/client";

export const GET_ROCKET_LAUNCHES = gql`
  query GetRocketLaunches($offset: Int, $limit: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_year
      details
      rocket {
        rocket_name
      }
    }
  }
`;
