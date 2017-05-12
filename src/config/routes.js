import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../shared/containers/app'
import NotFound from '../shared/components/app/notFound'
import * as Crowdfunding from '../routes/crowdfunding'

export const routes = () =>
  (<div>
    <Route path="/" component={App}>
      <IndexRoute component={Crowdfunding.Main} />
    </Route>
    <Route path="*" component={NotFound} />
  </div>)
