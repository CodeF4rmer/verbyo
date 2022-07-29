import styled from 'styled-components';

import { RowCard, DownAndLiveCard } from 'components/Card';
import { desktop, mobile, ROUTES } from 'utils';
import Subscribe from './Subscribe';
import { featuresData } from 'utils/articleData';

const Features: React.FC = () => {
  return (
    <>
      <Container>
        <Subscribe />
        <Content>
          {featuresData.map((data: any, index: number) => {
            return <RowCard
              router={ROUTES.FEATURES}
              data={data}
              key={index}
            />
          }
          )}
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
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`

export default Features;