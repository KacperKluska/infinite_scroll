import styled from "styled-components";

const StyledTitle = styled.header`
  font-size: 3rem;
  color: white;

  margin-bottom: 2rem;
`;

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return <StyledTitle>{title}</StyledTitle>;
};
