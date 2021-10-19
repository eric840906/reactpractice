import { HomePage, MenuPage, BuilderPage } from 'Pages'
import BuilderPageRoutes from './BuilderPage'
import React from 'react'
const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: HomePage
  },
  {
    path: '/menu',
    name: 'Menu',
    exact: true,
    component: MenuPage
  },
  {
    path: '/builder',
    name: 'Builder',
    component: BuilderPage,
    routes: BuilderPageRoutes
  },
  {
    path: '**',
    component: () => <h1>not found</h1>
  }
]

export default routes
