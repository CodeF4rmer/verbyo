
import styled from 'styled-components';
import Router from './Router';
import GlobalStyle from './GlobalStyles';
import Header from 'pages/Header'
import Footer from 'pages/Footer';

const App: React.FC<any> = (props: any) => {

  return (
    <>
      <GlobalStyle />
      <>
        <Header />
        <Content>
          <Router />
        </Content>
        <Footer />
      </>
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 19px - 50.5px - 104px);
`

export default App;