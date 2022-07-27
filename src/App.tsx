import { BrowserRouter } from 'react-router-dom';
import TopNav from './components/navigation/TopNav';
import Router from './components/Router';
import { Provider } from 'react-redux';
import store from './util/store';
import BodyWrapper from './components/BodyWrapper';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <Helmet>
          <title>Book Bay Drag</title>
        </Helmet>
        <BodyWrapper>
          <TopNav />
          <Router />
        </BodyWrapper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
