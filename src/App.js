import { useDisclosure } from '@chakra-ui/react'
import SideDrawer from './components/Drawer'
import TopBar from './components/TopBar'
import routes from './Router/routerConfig'
import BottomBar from './components/BottomBar'
import { Router, Switch } from 'react-router-dom'
import { history } from './Router/history'
import { RouteWithSubRoutes } from './Router/RouteWithSubRoutes'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Router history={history}>
        <TopBar onHamburgerClick={onOpen} />
        <SideDrawer onDrawerOpen={isOpen} onDrawerClose={onClose} />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <BottomBar />
      </Router>
    </>
  )
}

export default App
