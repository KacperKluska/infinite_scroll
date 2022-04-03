import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  RocketLaunchData,
  RocketLaunchQueryVariables,
  RocketLaunchResponse,
} from "./interfaces/interfaces";
import { GET_ROCKET_LAUNCHES } from "./rocketLaunchQuery";

const DATA_LIMIT = 20;

export const useRocketLaunches = () => {
  const [items, setItems] = useState<RocketLaunchData[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, loading, fetchMore } = useQuery<
    RocketLaunchResponse,
    RocketLaunchQueryVariables
  >(GET_ROCKET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: DATA_LIMIT,
    },
  });

  useEffect(() => {
    setItems(data?.launchesPast ?? []);
  }, [data]);

  const fetchMoreData = async () => {
    const result = await fetchMore({
      variables: { offset: items.length },
    });
    if (!result.data.launchesPast.length) setHasMore(false);

    // Delay for seeing a loading process
    setTimeout(
      () => setItems((prev) => [...prev, ...result.data.launchesPast]),
      1000
    );
  };

  return { items, hasMore, loading, fetchMoreData };
};
