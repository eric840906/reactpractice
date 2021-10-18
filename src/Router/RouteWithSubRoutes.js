import React from 'react'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => {
        console.log('render props:', { ...props })
        return (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )
      }}
    />
  )
}
