import styled from 'styled-components';
import { StyledCardItem, StyledCard } from './Card.styled';
import Button from '../Button';
import { useState } from 'react';

function Card({ question, answer, answered }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledCardItem>
      <StyledCard answered={answered}>
        <h2>{question}</h2>
        <Button variant='card' onClick={() => setShowAnswer(!showAnswer)}>
          {!showAnswer ? 'Show' : 'Hide'}
        </Button>
        <StyledAnswer isShown={!showAnswer}>{answer}</StyledAnswer>
      </StyledCard>
    </StyledCardItem>
  );
}

export default Card;

const StyledAnswer = styled.p`
  display: ${({ isShown }) => (isShown ? 'none' : null)};
`;
