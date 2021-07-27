import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from './components/navigation/TopNav';
import GlobalStyles from './styles/GlobalStyles';
import Router from './util/Router';

const BodyWrapper = styled.div`
  width: 800;
  margin: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <BodyWrapper>
        <TopNav />
        <Router />
      </BodyWrapper>
    </BrowserRouter>
  );
}

export default App;
