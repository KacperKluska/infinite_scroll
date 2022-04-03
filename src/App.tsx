import InfiniteScroll from "react-infinite-scroll-component";
import { StyledPage } from "./App.styles";
import { EndMessage } from "./components/EndMessage/EndMessage";
import { Loader } from "./components/Loader/Loader";
import { NavItem } from "./components/NavItem/NavItem";
import { Title } from "./components/Title/Title";
import { useRocketLaunches } from "./useRocketLaunches";

function App() {
  const { items, hasMore, loading, fetchMoreData } = useRocketLaunches();

  return (
    <StyledPage>
      <Title title="Infinite Scroll by Kacper Kluska" />
      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={items.length}
          hasMore={hasMore}
          loader={<Loader />}
          next={fetchMoreData}
          endMessage={<EndMessage />}
        >
          {items.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </InfiniteScroll>
      )}
    </StyledPage>
  );
}

export default App;
