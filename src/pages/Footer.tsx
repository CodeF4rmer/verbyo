import SocialIcons from 'components/SocialIcons';
import styled from 'styled-components';
import { mobile } from 'utils';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text>
          2022 Copyright to Sugar LTD
        </Text>
        <SocialIcons isHiden={true} />
      </Content>
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile} {
    justify-content: center;
  }
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
  font-size: 16px;
  ${mobile} {
    font-size: 12px;
  }
`

export default Footer;