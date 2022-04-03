import styled from "styled-components";
import { RocketLaunchData } from "../../interfaces/interfaces";

interface Props {
  item: RocketLaunchData;
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 30rem;
  text-align: center;

  border: 1px solid black;
  border-radius: 1rem;
  font-size: 1.5rem;

  padding: 1rem;
  margin: 1rem 0;
`;

const StyledDescription = styled.div`
  font-size: 1rem;
`;

export const NavItem = ({ item }: Props) => {
  return (
    <StyledItem>
      <div>Mission id: {item.id}</div>
      <div>Mission name: {item.mission_name}</div>
      <div>Rocket name: {item.rocket.rocket_name}</div>
      <div>Launch year: {item.launch_year}</div>
      <div>Mission details:</div>
      <StyledDescription>{item.details}</StyledDescription>
    </StyledItem>
  );
};
