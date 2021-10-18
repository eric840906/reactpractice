import { HomePage, MenuPage, BuilderPage } from '../Pages'
import BuilderPageRoutes from './BuilderPage'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'Menu',
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
