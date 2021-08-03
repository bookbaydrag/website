import { Route, Switch } from 'react-router-dom';
import Persons from '../pages/Persons';
import Search from '../pages/Search';

function Router() {
  return (
    <Switch>
      <Route path={[
        '/p/:slug/:id',
        '/p/:id',
        '/p',
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
        's/:term',
        '/s',
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
