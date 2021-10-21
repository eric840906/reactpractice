import { HomePage, MenuPage, BuilderPage } from 'Pages'
import { Redirect } from 'react-router-dom'
import BuilderPageRoutes from './BuilderPage'

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
    path: '',
    component: () => <Redirect to='/' />
  }
]

export default routes
