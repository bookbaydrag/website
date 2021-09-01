import { BrowserRouter } from 'react-router-dom';
import TopNav from './components/navigation/TopNav';
import GlobalStyles from './styles/GlobalStyles';
import Router from './components/Router';
import { Provider } from 'react-redux';
import store from './util/store';
import BodyWrapper from './components/BodyWrapper';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store} >
        <BodyWrapper>
          <TopNav />
          <Router />
        </BodyWrapper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
