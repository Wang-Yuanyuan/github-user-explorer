import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Users from '../users'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:username" component={Users} />
    </main>
  </div>
)

export default App
