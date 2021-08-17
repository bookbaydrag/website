import { Route, Switch } from 'react-router-dom';
import Account from '../pages/Account';
import Persons from '../pages/Persons';
import Search from '../pages/Search';

function Router() {
  return (
    <Switch>

      <Route path={[
        '/account/:token',
        '/account',
      ]}>
        <Account />
      </Route>

      <Route path={[
        '/persons/:slug/:id',
        '/persons/:id',
        '/persons',
      ]}>
        <Persons />
      </Route>

      <Route path={[
        '/e/:slug/:id',
        '/e/:id',
        '/e',
      ]}>
        <Persons />
      </Route>

      <Route path={[
        '/search/:term',
        '/search',
      ]}>
        <Search />
      </Route>

      <Route path="/">
        <div>home</div>
      </Route>

    </Switch>
  );
};

export default Router;