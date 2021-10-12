import { useDisclosure } from "@chakra-ui/react"
import SideDrawer from './components/Drawer'
import TopBar from './components/TopBar'
import React from 'react';
import routes from './Router/routerConfig'
import BottomBar from "./components/BottomBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Router>
        <TopBar onHamburgerClick={onOpen}/>
        <SideDrawer onDrawerOpen={isOpen} onDrawerClose={onClose}/>
        <Switch>
          {routes.map((route) => {
            return (
              <Route path={route.path} key={route} exact>
                <route.component />
              </Route>
            );
          })}
        </Switch>
        <BottomBar/>
      </Router>
    </>
  )
}

export default App;
