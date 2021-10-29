import React, { useEffect, useState, useRef } from 'react'
import { Button, Flex, Text, Icon, Heading } from '@chakra-ui/react'
import { MdFavorite, MdListAlt, MdHome, MdShoppingCart } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { FaTicketAlt } from 'react-icons/fa'
// import { history } from 'Router/history'
import { useHistory } from 'react-router'
import useResize from 'hooks/useResize'
const buttonNormalStyle = {
  flexDirection: 'column',
  borderRadius: '0',
  flex: 1,
  color: 'brand.200',
  bg: 'brand.beige',
  h: 'auto',
  padding: 1,
  _hover: {
    bg: 'brand.200',
    color: 'brand.100'
  },
  _active: {
    bg: 'orange.700',
    color: 'orange.50',
    transform: 'scale(0.9)'
  }
}
const buttonActiveStyle = {
  flexDirection: 'column',
  borderRadius: '0',
  flex: 1,
  color: 'brand.100',
  bg: 'brand.200',
  h: 'auto',
  padding: 1,
  _hover: {
    background: 'orange.700',
    color: 'orange.50'
  },
  _active: {
    background: 'orange.700',
    color: 'orange.50'
  },
  pointerevent: 'none'
}
const barStyle = {
  position: 'fixed',
  zIndex: 'sticky',
  bottom: 0,
  left: 0,
  bg: 'brand.beige',
  gridGap: 3.5,
  justifyContent: 'space-around',
  h: 'auto',
  w: '100%',
  transition: 'transform 0.5s ease',
  transform: { lg: 'translateY(90%)' },
  _hover: { lg: { transform: 'translateY(0)' } }
}
const iconStyle = {
  w: { base: 5, md: 8 },
  h: { base: 5, md: 8 }
}

const BottomBar = () => {
  const [dynamicMargin, setDynamicMargin] = useState(20)
  const location = useLocation()
  const [linkState, setLinkState] = useState('/')
  const history = useHistory()
  useEffect(() => {
    setLinkState(location)
  }, [location])
  const barRef = useRef(null)
  const [windowLength] = useResize(barRef)
  const topPath = pathName => pathName && pathName.split('/')[1]
  const buttonStyle = value => {
    if (value === '/') {
      return linkState.pathname === value
        ? buttonActiveStyle
        : buttonNormalStyle
    }
    return topPath(linkState.pathname) === value
      ? buttonActiveStyle
      : buttonNormalStyle
  }
  useEffect(() => {
    setDynamicMargin(windowLength)
  }, [windowLength])
  return (
    <>
      <Flex marginTop={dynamicMargin} />
      <Flex ref={barRef} {...barStyle}>
        <Button
          {...buttonStyle('favorite')}
          onClick={() => history.push('favorite')}
          pointerEvents={
            topPath(linkState.pathname) === 'favorite' ? 'none' : 'all'
          }
        >
          <Icon as={MdFavorite} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>Likes</Text>
        </Button>
        <Button
          {...buttonStyle('builder')}
          onClick={() => history.push('builder')}
          pointerEvents={
            topPath(linkState.pathname) === 'builder' ? 'none' : 'all'
          }
        >
          <Icon as={MdListAlt} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>DIY</Text>
        </Button>
        <Button
          {...buttonStyle('/')}
          onClick={() => history.push('/')}
          pointerEvents={linkState.pathname === '/' ? 'none' : 'all'}
        >
          <Icon as={MdHome} {...iconStyle} />
          <Heading fontSize={{ base: 12, md: 18 }}>Home</Heading>
        </Button>
        <Button {...buttonNormalStyle}>
          <Icon as={FaTicketAlt} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>Coupons</Text>
        </Button>
        <Button {...buttonNormalStyle}>
          <Icon as={MdShoppingCart} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>Cart</Text>
        </Button>
      </Flex>
    </>
    // <>
    //   <Flex marginTop={dynamicMargin} />
    //   <Flex ref={barRef} {...barStyle}>
    //     <Button {...buttonNormalStyle}>
    //       <Icon as={MdFavorite} {...iconStyle} />
    //       <Text fontSize={{ base: 12, md: 18 }}>Likes</Text>
    //     </Button>
    //     <Button
    //       {...buttonStyle('/builder')}
    //       onClick={() => history.push('/builder')}
    //       pointerEvents={linkState.pathname === '/builder' ? 'none' : 'all'}
    //       // disabled={linkState.pathname === '/builder'}
    //     >
    //       <Icon as={MdListAlt} {...iconStyle} />
    //       <Text fontSize={{ base: 12, md: 18 }}>DIY</Text>
    //     </Button>
    //     <Button
    //       {...buttonStyle('/')}
    //       onClick={() => history.push('/')}
    //       pointerEvents={linkState.pathname === '/' ? 'none' : 'all'}
    //     >
    //       <Icon as={MdHome} {...iconStyle} />
    //       <Heading fontSize={{ base: 12, md: 18 }}>Home</Heading>
    //     </Button>
    //     <Button {...buttonNormalStyle}>
    //       <Icon as={FaTicketAlt} {...iconStyle} />
    //       <Text fontSize={{ base: 12, md: 18 }}>Coupons</Text>
    //     </Button>
    //     <Button {...buttonNormalStyle}>
    //       <Icon as={MdShoppingCart} {...iconStyle} />
    //       <Text fontSize={{ base: 12, md: 18 }}>Cart</Text>
    //     </Button>
    //   </Flex>
    // </>
  )
}

export default BottomBar
