import styled from "styled-components";
import "./style.css";

const StyledLoader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: white;
  font-size: 1.5rem;
`;

export const Loader = () => {
  return (
    <StyledLoader>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading</span>
    </StyledLoader>
  );
};
