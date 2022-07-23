import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { desktop, mobile } from 'utils';
import Button from 'components/Button';

export const DownloadCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Title>Download our app </Title>
      <Content>This is a text that will be changed later with something that we will decide.</Content>
      <Button
        text="Download"
        onClick={() => navigate("/")}
      />
    </Card>
  )
}
export const LiveCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Title>Need more help?</Title>
      <Content>Talk to us live on our Telegram Support Channel.Don't have Telegram? Download here.</Content>
      <Button
        text="Live Support"
        onClick={() => navigate("/")}
      />
    </Card>
  )
}
export const DownAndLiveCard: React.FC<any> = (props: any) => {
  return (
    <Container isArticlePage={props.isArticlePage}>
      {props.isArticlePage && <Line />}
      <DownloadCard />
      <LiveCard />
    </Container>
  )
}

const Card = styled.div`
  width: 400px;
  ${mobile} {
    width: 80%;
    gap: 15px;
  }
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background: transparent;
`

const Title = styled.h2`
  color: var(--shade-0);
  font-family: GraphikBold;
  font-size: 30px;
  line-height: 35px;
  padding: 0;
  margin: 0;
  ${mobile} {
    font-size: 16px;
    font-weight: 700;
  }
`

const Content = styled.p`
  color: var(--shade-2);
  font-family: GraphikRegular;
  font-size: 16px;
  ${mobile} {
    font-size: 14px;
  }
  font-weight: 400;
  line-height: 22px;
  padding: 0;
  margin: 0;
  letter-spacing: 0.32px;
  text-align: center;
`
const Container = styled.div<{ isArticlePage: boolean }>`
  width: 100%;
  margin-top: 100px;
  background-color: ${props => props.isArticlePage ? "transparent" : "var(--shade-3)"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.isArticlePage ? "580px" : "400px"};
  flex-direction: ${props => props.isArticlePage ? "column" : "row"};
  gap: 50px;
  ${mobile} {
    flex-direction: column;
  }
`
const Line = styled.div`
  width: 748px;
  height: 0.5px;
  background-color: var(--line);
  ${desktop}, ${mobile} {
    width: 80%;
  }
`
