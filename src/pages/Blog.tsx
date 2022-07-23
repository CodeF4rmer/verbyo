import styled from 'styled-components';

import { RowCard, CoulmnCard } from 'components/Card';
import { desktop, mobile } from 'utils';
import Subscribe from './Subscribe';
import articleData from 'utils/articleData.json';

const Blog: React.FC = () => {
  return (
    <Container>
      <Subscribe />
      <Content>
        <Section>
          <RowCard data={articleData[0]} />
        </Section>
        <Section>
          <CoulmnCard data={articleData[1]} />
          <CoulmnCard data={articleData[2]} />
        </Section>
        <Section>
          <CoulmnCard data={articleData[0]} />
          <CoulmnCard data={articleData[1]} />
          <CoulmnCard data={articleData[2]} />
        </Section>
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile} {
    flex-direction: column;
  }
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`

export default Blog;