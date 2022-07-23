import styled from 'styled-components';
import { FacebookUrl, InstagramUrl, TelegramUrl } from 'utils';
import { mobile } from 'utils';

const SocialIcons: React.FC<any> = (props) => {
  const isHiden = props.isHiden ? true : false;
  return (
    <Container isHeader={isHiden} >
      <a
        href={FacebookUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          src="img/facebook.png"
          width="11px"
          height="20px"
        />
      </a>
      <a
        href={InstagramUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          src="img/instagram.png"
          width="20px"
          height="20px"
        />
      </a>
      <a
        href={TelegramUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          src="img/telegram.png"
          width="21px"
          height="18px"
        />
      </a>
    </Container>
  )
}
const Container = styled.div<{ isHeader: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  ${mobile} {
    display: ${props => props.isHeader ? "none" : "flex"};
  }
`;

const Icon = styled.img<{ width: string; height: string }>`
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default SocialIcons;