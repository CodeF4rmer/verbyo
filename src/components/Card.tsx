import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const imageWidth = props.width === "100%" ?
    685 : props.width === "50%" ?
      520 : 340;
  const imageHeight = props.width === "100%" ? "350px" : "200px";
  return (
    <Container
      onClick={() => navigate("/News/:id=1")}
      width={props.width}
    >
      <Img
        src="/img/1280-720.png"
        width={imageWidth + "px"}
        height={imageHeight + "px"}
        alt=""
      />
      <TextGroup
        width={props.width}
      >
        <div>
          <Title>H2 Title of the post</Title>
          <Content>Dear Customers, we just wanted to let you know that we have been keeping a close eye on the situation in Ukraine...</Content>
        </div>
        <Date>22 OCTOBER 2022</Date>
      </TextGroup>
    </Container>
  )
}

const Container = styled.div<{ width: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: ${props => props.width === "100%" ? "row" : "column"};
  border-radius: 5px;
  box-shadow: 0 6px 22px var(--shadow);
`
const Img = styled.img<{ width: string }>`
  border-radius: ${props => props.width === "685px" ? "5px 0 0 5px" : "5px 5px 0 0"};
`

const TextGroup = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${props => props.width === "100%" ? "67px 56px 20px 30px" : "33px 21px 23px 26px"};
  height: ${props => props.width === "100%" ? "350px" : "250px"}
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

export default Card;