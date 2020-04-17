import React from 'react';
import './App.css'
import Admin from './user/admin/admin'
import Sales from './user/sales/sales'
import Login from "./component/logIn/logIn";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sales" component={Sales} />
        <Route path="/admin" component={Admin} />
      </Switch>
      </BrowserRouter>
    )
  }
}
export default App