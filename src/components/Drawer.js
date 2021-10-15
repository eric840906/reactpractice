import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Heading,
  Box
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import routes from '../Router/routerConfig'
import React, { useEffect, useState } from 'react'
import UserCard from './Drawer/UserCard'
import Proptype from 'prop-types'

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
        placement='left'
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ width: '80%' }}>
          <DrawerHeader bg='white'>
            <Heading size='md'>Loana&#39;s Sandwich</Heading>
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack>
              <UserCard />
              {routes.map(route => {
                return (
                  <NavLink
                    to={route.path}
                    style={{ width: '100%', marginTop: 0 }}
                    key={route.path}
                  >
                    <Box
                      as='button'
                      w='100%'
                      padding={2}
                      key={route.name}
                      bg={
                        linkState && linkState.pathname === route.path
                          ? 'brand.200'
                          : ''
                      }
                      color={
                        linkState && linkState.pathname === route.path
                          ? 'brand.100'
                          : ''
                      }
                    >
                      {route.name}
                    </Box>
                  </NavLink>
                )
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

SideDrawer.propTypes = {
  onDrawerOpen: Proptype.bool,
  onDrawerClose: Proptype.func
}

export default SideDrawer
