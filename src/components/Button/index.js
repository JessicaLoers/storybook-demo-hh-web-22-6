import { StyledButton } from './Button.styled';

export default function Button({ variant, onClick, children }) {
  return (
    <StyledButton variant={variant} onClick={() => onClick(variant)}>
      {children}
    </StyledButton>
  );
}
