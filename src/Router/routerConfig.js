import { HomePage, MenuPage, BuilderPage } from '../Pages'
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
  }
]

export default routes
