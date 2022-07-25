import { Route, Routes } from 'react-router-dom';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Personas from '../pages/Personas';

function Router() {
  return (
    <Routes>
      <Route path="/account" element={<Account />} />
      <Route path="/account/:token" element={<Account />} />

      <Route path="/persons" element={<Personas />} />
      <Route path="/persons/:id" element={<Personas />} />
      <Route path="/persons/:slug/:id" element={<Personas />} />

      {/* <Route path={[
        '/e/:slug/:id',
        '/e/:id',
        '/e',
      ]}>
        <Events />
      </Route> */}

      {/* <Route path={[
        '/search/:term',
        '/search',
      ]}>
        <Search />
      </Route> */}

      <Route path="/" element={<Home />} />

    </Routes>
  );
};

export default Router;
