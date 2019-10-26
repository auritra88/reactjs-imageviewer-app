import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './home/Home';
import LoginPage from './login/Login';

const Controller = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/home" component={HomePage} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default Controller;