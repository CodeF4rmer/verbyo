import styled from 'styled-components';
import { desktop, mobile } from 'utils';
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';

import articleData from 'utils/articleData.json'
import { useEffect, useState } from 'react';

const Article: React.FC<any> = () => {
  const [data, setData] = useState(articleData[0]);
  const params = useParams();

  useEffect(() => {
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
      <Header>
        <Date>{data.date}</Date>
        <Title>{data.title}</Title>
        <Img src={data.image} />
      </Header>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 1080px;
  ${desktop}, ${mobile} {
    width: 100%;
  }
  padding: 0 10px;
  gap: 80px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 0 0;
  gap: 30px;
`
const Date = styled.span`
  color: var(--shade-2);
  font-size: 12px;
  font-family: GraphikRegular;
`

const Title = styled.span`
  color: var(--shade-0);
  font-size: 42px;
  font-family: GraphikBold;
`

const Img = styled.img`
  width: 1040px;
  ${desktop}, ${mobile} {
    width: 100%;
  }
`

export default Article;