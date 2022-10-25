import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  // auf

  border: none;
  border-radius: 3px;
  margin: 1rem;
  padding: 0.6rem 1rem;

  ${({ variant }) =>
    variant === 'save' &&
    css`
      background-color: mediumseagreen;
    `}

  ${({ variant }) =>
    variant === 'cancel' &&
    css`
      background-color: tomato;
    `}
    ${({ variant }) =>
    variant === 'card' &&
    css`
      background-color: #3d3d3d;
      color: #ffffff;
    `} // zu
`;

export { StyledButton };
