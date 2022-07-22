import styled from 'styled-components';

import { RowCard } from 'components/Card';
import { desktop, mobile } from 'utils';
import Subscribe from './Subscribe';

const Features: React.FC = () => {
  return (
    <Container>
      <Subscribe />
      <Content>
        <RowCard />
        <RowCard />
        <RowCard />
      </Content>
    </Container>
  );

}
const Container = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
width: 1080px;
${desktop}, ${mobile} {
  width: 100%;
}
padding: 0 10px;
gap: 47px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`

export default Features;