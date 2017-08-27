import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import Users from '../users'
import UserDetails from '../userDetails'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:term" component={Users} />
      <Route exact path="/user/:userName" component={UserDetails} />
    </main>
  </div>
)

export default App
