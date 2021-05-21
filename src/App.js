import React from 'react';
import { Router } from '@reach/router';

import Main from './views/Person/MainPerson';
import Person from './views/Person/Person'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/"/>
        <Person path="people/:id" />
        <Update path="people/:id/edit" />
      </Router>
    </div>
  );
}
export default App;