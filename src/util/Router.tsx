import { Route, Switch } from 'react-router-dom';
import Persons from '../pages/Persons';
import Search from '../pages/Search';

function Router() {
  return (
    <Switch>
      <Route path="/persons/:id">
        <Persons />
      </Route>
      <Route path="/events/:id">
        <Persons />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <div>home</div>
      </Route>
    </Switch>
  );
};

export default Router;
