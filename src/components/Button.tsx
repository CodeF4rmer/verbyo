import styled from 'styled-components';
import { mobile } from 'utils';

const Button: React.FC<any> = (props: any) => {
  return (
    <Container onClick={props.onClick} >
      {props.text}
    </Container>
  );

}
const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 50px;
  box-sizing: border-box;
  color: var(--shade-4);
  font-family: GraphikMedium;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--button-color);
  border: 0;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  ${mobile} {
    width: 136px;
    height: 32px;
    font-size: 11px;
  }
`;

export default Button;