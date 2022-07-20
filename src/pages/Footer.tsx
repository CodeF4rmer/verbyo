import SocialIcons from 'components/SocialIcons';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text>
          2022 Copyright to Sugar LTD
        </Text>
        <SocialIcons />
      </Content>
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 30px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 1080px;
  height: 24px;
  padding: 0 10px;
`

const Text = styled.p`
  color: var(--shade-2);
  font-family: serif;
  font-weight: 400;
  line-height: 24px;
`

export default Footer;