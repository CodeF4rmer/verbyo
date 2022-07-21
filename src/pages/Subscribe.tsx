import Button from 'components/Button';
import styled from 'styled-components';

const Subscribe: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Subscribe to our newsletter !</Title>
        <Text>Stay up to date! Get all the news and updates directly from us. </Text>
      </Header>
      <Email>
        <Input 
          placeholder="Enter your email here"
        />
        <Button
          onClick={() => alert("Success !")}
          text="Subscribe"
        />
      </Email>
    </Container>
  );

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Title = styled.span`
  color: var(--shade-0);
  font-size: 30px;
  font-family: GraphikBold;
`
const Text = styled.span`
  color: var(--shade-2);
  font-size: 16px;
  font-family: GraphikRegular;
`
const Email = styled.span`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const Input = styled.input`
  width: 300px;
  border: 0;
  border-bottom: 1px solid var(--shade-2);
  color: var(--shade-2);
  font-size: 16px;
  font-family: GraphikRegular;
  box-sizing: border-box;
  padding: 0 0 0 10px;
`

export default Subscribe;