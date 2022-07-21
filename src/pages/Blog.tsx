import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Card from 'components/Card';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo
          width="264px"
          height="132px"
        />
        <HeaderText>
          Our place for news, updates and help.
        </HeaderText>
        <Button
          onClick={() => navigate("/Subscribe")}
          text="Subscribe"
        />
      </Header>
      <Content>
        <Section>
          <Card width="100%" />
        </Section>
        <Section>
          <Card width="50%" />
          <Card width="50%" />
        </Section>
        <Section>
          <Card width="33.33%" />
          <Card width="33.33%" />
          <Card width="33.33%" />
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
  padding: 0 10px;
  gap: 47px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 417px;
  padding: 62px 0 0 0;
  border-bottom: 2px solid var(--hr-color);
`

const HeaderText = styled.h1`
  color: var(--shade-1);
  height: 20px;
  font-size: 18px;
  margin-bottom: 51px;
`

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
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
`

export default Blog;