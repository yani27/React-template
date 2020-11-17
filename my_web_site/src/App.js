import React from 'react';
import './App.css';
import navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <navbar/>
      <Switch>
        <Route path='/'exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
