import styled from 'styled-components';
import { desktop, mobile } from 'utils';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';

import articleData from 'utils/articleData'
import { useEffect, useState } from 'react';
import { ColumnCard, DownAndLiveCard } from 'components/Card';


const Article: React.FC<any> = () => {
  const [data, setData] = useState(articleData[0]);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    articleData.forEach((_data: any) => {
      if (_data.title.replace(/\s/g, '-') === params.id) {
        setData(_data);
        return;
      }
    })
  }, [params]);

  return (
    <Container>
      <Helmet>
        <meta property="og:description" content={data.meta} />
        <meta property="og:image" content={data.ogImage} />
      </Helmet>
      <Content>
        <Header>
          <Date>{data.date}</Date>
          <Title>{data.title}</Title>
          <Img src={data.image} />
        </Header>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Content>
      <FooterCards>
        <DownAndLiveCard isArticlePage={true} />
        <Section>
          <NextArticle>
            <ColumnCard data={articleData[0]} />
          </NextArticle>
        </Section>
      </FooterCards>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 1080px;
  ${desktop}, ${mobile} {
    width: 95%;
  }
  padding: 0 10px;
  gap: 80px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 0 0;
  gap: 30px;
  width: 100%;
`
const Date = styled.span`
  color: var(--shade-2);
  font-size: 12px;
  font-family: GraphikRegular;
`

const Title = styled.span`
  color: var(--shade-0);
  font-size: 42px;
  ${mobile} {
    font-size: 20px;
    line-height: 22px;
  }
  font-family: GraphikBold;
`

const Img = styled.img`
  width: 1040px;
  ${desktop}, ${mobile} {
    width: 100%;
  }
`

const FooterCards = styled.div`
  width: 100%;
`

const Section = styled.div`
  width: 100%;
  background-color: var(--shade-3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 614px;
`
const NextArticle = styled.div`
  width: 520px;
  ${mobile} {
    width: 95%;
    box-sizing: border-box;
    padding: 0 10px;
  }
`

export default Article;