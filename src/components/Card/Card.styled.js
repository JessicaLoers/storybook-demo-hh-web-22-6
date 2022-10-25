import styled from 'styled-components';

const StyledCardItem = styled.li`
  list-style: none;
  margin: 1rem;
  width: 15rem;
`;

const StyledCard = styled.article`
  border-radius: 3px;
  padding: 2rem;
  text-align: center;
  position: relative;
  background-color: ${({ answered }) => (answered ? 'lightgreen' : 'tomato')};
`;

export { StyledCardItem, StyledCard };
