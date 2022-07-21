import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { desktop, mobile } from 'utils';

export const RowCard: React.FC<any> = (props) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate("/News/:id=1")}
      type="row"
    >
      <Img
        src="/img/1280-720.png"
        type="row"
      />
      <TextGroup type="row" >
        <div>
          <Title>H2 Title of the post</Title>
          <Content>Dear Customers, we just wanted to let you know that we have been keeping a close eye on the situation in Ukraine...</Content>
        </div>
        <Date>22 OCTOBER 2022</Date>
      </TextGroup>
    </Container>
  )
}

export const CoulmnCard: React.FC<any> = (props) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate("/News/:id=1")}
      type="column"
    >
      <Img
        src="/img/1280-720.png"
        type="column"
      />
      <TextGroup type="column">
        <div>
          <Title>H2 Title of the post</Title>
          <Content>Dear Customers, we just wanted to let you know that we have been keeping a close eye on the situation in Ukraine...</Content>
        </div>
        <Date>22 OCTOBER 2022</Date>
      </TextGroup>
    </Container>
  )
}

const Container = styled.div<{ type: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.type === "row" ? "row" : "column"};
  border-radius: 5px;
  box-shadow: 0 6px 22px var(--shadow);
  ${mobile} {
    flex-direction: column;
  }
  :hover {
    transform: scale(1.05);
    transition: .2s;
  }
`

const Img = styled.img<{ type: string }>`
  width: ${props => props.type === "row" ? "685px" : "100%"};
  ${desktop} {
    width: ${props => props.type === "row" ? "calc(685 / 1060 * 100% );" : "100%"};
  }
  ${mobile} {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  border-radius: ${props => props.type === "row" ? "5px 0 0 5px" : "5px 5px 0 0"};
`

const TextGroup = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${props => props.type === "row" ? "67px 56px 20px 30px" : "33px 21px 23px 26px"};
  ${mobile} {
    padding: 19px 15px;
  }
  gap: 20px;
`

const Title = styled.h2`
  color: var(--shade-0);
  font-family: GraphikBold;
  font-size: 26px;
  line-height: 35px;
  padding: 0;
  margin: 0;
  margin-bottom: 29px;
`

const Content = styled.p`
  color: var(--shade-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  font-family: serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0;
`

const Date = styled.span`
  color: var(--shade-2);
  padding: 0;
  margin: 0;
  font-family: GraphikRegular;
  font-size: 12px;
  line-height: 16px;
  text-align: end;
`
