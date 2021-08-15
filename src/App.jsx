import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  //IF THE USER HAVENT LOGIN REDIRECT TO /login
  if(!token) {
     return <Login setToken={setToken} title="Login - Simple User Auth" />
  }

  return (
    <div className="App">
      <div className="wrapper">
      <h1>Application</h1>
          <Router>
            <Switch>
              <Route path="/dashboard">
                  <Dashboard title="Dashboard - Simple User Auth" />
              </Route>
              <Route path="/preferences">
                  <Preferences title="Preferences - Simple User Auth" />
              </Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
