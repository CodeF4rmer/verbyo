import styled from 'styled-components';

const Button: React.FC<any> = (props: any) => {
  return (
    <Container onClick={props.onClick}>
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
  padding: 12px 0 14px 0;
  color: var(--shade-4);
  font-family: GraphikMedium;
  font-size: 16px;
  line-height: 24px;
  background-color: var(--button-color);
  border: 0;
  border-radius: 5px;
`;

export default Button;