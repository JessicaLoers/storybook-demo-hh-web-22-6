import styled from 'styled-components';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  function handleClick(variant) {
    console.log(`I am the ${variant} button`);
  }

  return (
    <>
      <Headline>Hello You!</Headline>
      <MainWrapper>
        <div>
          <Button onClick={handleClick} variant='save'>
            Save
          </Button>
          <Button onClick={handleClick} variant='cancel'>
            Cancel
          </Button>
        </div>
        <ul>
          <Card
            question='I have got a question'
            answer='This is my super answer for my super question'
          />
        </ul>
      </MainWrapper>
    </>
  );
}

export default App;

const Headline = styled.h1`
  text-align: center;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
