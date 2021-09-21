import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Box
} from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router-dom";
import routes from '../Router/routerConfig'
import React, { useEffect, useState } from 'react'

const SideDrawer = ({ onDrawerOpen, onDrawerClose }) => {
  const btnRef = React.useRef()
  const location = useLocation()
  const [linkState, setLinkState] = useState()
  useEffect(() => {
    setLinkState(location)
  }, [location])
  return (
    <>
      <Drawer
        isOpen={onDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{width: '80%'}}>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.100" >zo6596 App</DrawerHeader>

          <DrawerBody>
            <VStack>
              {
                routes.map(route => {
                  return (
                    <Box w="100%" padding={2} key={route.name} bg={linkState.pathname === route.path ? 'red' : ''}>
                      <NavLink textalign="center" display="inline-block" w="100%" to={route.path}>{route.name}</NavLink>
                    </Box>
                  )
                })
              }
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer