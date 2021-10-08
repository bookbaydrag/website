import { Route, Switch } from 'react-router-dom';
import Account from '../pages/Account';
import Personas from '../pages/Personas';
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
        <Personas />
      </Route>

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

      <Route path="/">
        <Search />
      </Route>

    </Switch>
  );
};

export default Router;
