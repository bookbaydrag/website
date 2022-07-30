import { Route, Routes } from 'react-router-dom';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Personas from '../pages/Personas';

function Router() {
  return (
    <Routes>
      <Route path="/account" element={<Account />} />
      <Route path="/account/:token" element={<Account />} />

      <Route path="/personas" element={<Personas />} />
      <Route path="/personas/:id" element={<Personas />} />
      <Route path="/personas/:slug/:id" element={<Personas />} />

      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;
