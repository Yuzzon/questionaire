import React from 'react'
import {Switch, Route} from 'react-router-dom'
import EmploymentPage from './pages/EmploymentPage'
import ProprietorshipsPage from './pages/ProprietorshipsPage'
import StatusPage from './pages/StatusPage'
import ConfirmationPage from './pages/ConfirmationPage'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={EmploymentPage} />
    <Route path="/proprietorships" component={ProprietorshipsPage} />
    <Route path="/status" component={StatusPage} />
    <Route path="/confirm" component={ConfirmationPage} />
  </Switch>
)
