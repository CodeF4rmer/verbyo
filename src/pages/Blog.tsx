import styled from 'styled-components';

const Blog: React.FC = () => {
  return (
    <Container>
      This is home
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1080px;
  padding: 0 10px;
`;

export default Blog;