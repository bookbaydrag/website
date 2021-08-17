import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from './components/navigation/TopNav';
import GlobalStyles from './styles/GlobalStyles';
import Router from './components/Router';
import UserContext from './components/UserContext';

const BodyWrapper = styled.div`
  width: 800;
  margin: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <BodyWrapper>
        <UserContext>
          <TopNav />
          <Router />
        </UserContext>
      </BodyWrapper>
    </BrowserRouter>
  );
}

export default App;
