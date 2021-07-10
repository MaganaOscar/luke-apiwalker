import React from 'react';
import { Router } from '@reach/router';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  return (
    <div>
      <Search/>
      <Router>
        <Result path="/:resource/:idAPI"/>
      </Router>
    </div>
  );
}

export default App;
