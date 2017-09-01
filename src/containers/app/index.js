import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home'
import Users from '../users'
import UserDetails from '../userDetails'
import notFoundPage from '../../components/404'

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:term" component={Users} />
        <Route exact path="/user/:userName" component={UserDetails} />
        <Route exact path="/*" component={notFoundPage} />
      </Switch>
    </main>
  </div>
)

export default App
