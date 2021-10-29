import { HomePage, FavoritePage, BuilderPage } from 'Pages'
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
    path: '/favorite',
    name: 'Favorite',
    exact: true,
    component: FavoritePage
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
