import styled from "styled-components";

const StyledMessage = styled.div`
  width: 100%;

  font-size: 1.5rem;
  color: white;
  text-align: center;

  margin: 2rem 0;
`;

export const EndMessage = () => {
  return <StyledMessage>Yay! You have seen it all</StyledMessage>;
};
