import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { StyledPage } from "./App.styles";
import { EndMessage } from "./components/EndMessage/EndMessage";
import { Loader } from "./components/Loader/Loader";
import { NavItem } from "./components/NavItem/NavItem";
import { Title } from "./components/Title/Title";
import {
  RocketLaunchData,
  RocketLaunchResponse,
} from "./interfaces/interfaces";
import { GET_ROCKET_LAUNCHES } from "./rocketLaunchQuery";

const DATA_LIMIT = 20;

function App() {
  const [items, setItems] = useState<RocketLaunchData[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, loading, fetchMore } = useQuery<RocketLaunchResponse>(
    GET_ROCKET_LAUNCHES,
    {
      variables: {
        offset: 0,
        limit: DATA_LIMIT,
      },
    }
  );

  useEffect(() => {
    setItems(data?.launchesPast ?? []);
  }, [data]);

  const fetchMoreData = async () => {
    const result = await fetchMore({
      variables: { offset: items.length || 0 },
    });
    if (!result.data.launchesPast.length) setHasMore(false);

    // Delay for seeing a loading process
    setTimeout(
      () => setItems((prev) => [...prev, ...result.data.launchesPast]),
      1000
    );
  };

  return (
    <StyledPage>
      <Title title="Infinite Scroll by Kacper Kluska" />
      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={items.length || 0}
          hasMore={hasMore}
          loader={<Loader />}
          next={fetchMoreData}
          endMessage={<EndMessage />}
        >
          {items.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </InfiniteScroll>
      )}
    </StyledPage>
  );
}

export default App;
