import styled from 'styled-components';

import { RowCard, ColumnCard, DownAndLiveCard } from 'components/Card';
import { desktop, mobile, ROUTES } from 'utils';
import Subscribe from './Subscribe';
import { blogData } from 'utils/articleData';

const Blog: React.FC = () => {
  return (
    <>
      <Container>
        <Subscribe />
        <Content>
          <Section>
            <RowCard
              router={ROUTES.BLOG}
              data={blogData[0]} />
          </Section>
          <Section>
            <ColumnCard
              router={ROUTES.BLOG}
              data={blogData[1]} />
            <ColumnCard
              router={ROUTES.BLOG}
              data={blogData[2]} />
          </Section>
          <Section>
            <ColumnCard
              router={ROUTES.BLOG}
              data={blogData[3]} />
            <ColumnCard
              router={ROUTES.BLOG}
              data={blogData[4]} />
            <ColumnCard
              router={ROUTES.BLOG}
              data={blogData[5]} />
          </Section>
        </Content>
      </Container>
      <DownAndLiveCard isArticlePage={false} />
    </>
  );

}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1080px;
  ${desktop}, ${mobile} {
    width: 95%;
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