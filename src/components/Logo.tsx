import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logo: React.FC<any> = (props) => {

  const navigate = useNavigate();
  return (
    <LogoIcon
      src="/img/logo.png"
      onClick={() => navigate("/")}
      width={props.width}
      height={props.height}
    />
  )
}

const LogoIcon = styled.img<{ width: string; height: string }>`
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default Logo;