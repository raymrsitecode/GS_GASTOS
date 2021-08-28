import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import GifExpertApp from './GifExpertApp';
import SingIn from './SingIn';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={SingIn} />
    <Route path="/createAccount" component={GifExpertApp} />
  </Switch>
  </BrowserRouter>
   ,
     document.getElementById('root')
);
