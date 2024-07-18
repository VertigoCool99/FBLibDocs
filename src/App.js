import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocPage from './pages/DocPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/docs/:id" component={DocPage} />
      </Switch>
    </Router>
  );
}

export default App;
