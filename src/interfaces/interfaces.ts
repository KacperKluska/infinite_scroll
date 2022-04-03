export interface RocketLaunchResponse {
  launchesPast: RocketLaunchData[];
}

export interface RocketLaunchData {
  id: number;
  mission_name: string;
  launch_year: number;
  details: string;
  rocket: RocketData;
}

export interface RocketData {
  rocket_name: string;
}
