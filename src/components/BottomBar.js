import React, { useEffect, useState, useRef } from 'react'
import { Button, Flex, Text, Icon, Heading } from '@chakra-ui/react'
import { MdFavorite, MdListAlt, MdHome, MdShoppingCart } from 'react-icons/md'
import { FaTicketAlt } from 'react-icons/fa'
import useResize from '../hooks/useResize'
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
  padding: 1
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
  const barRef = useRef(null)
  const [windowLength] = useResize(barRef)
  useEffect(() => {
    setDynamicMargin(windowLength)
  }, [windowLength])
  return (
    <>
      <Flex marginTop={dynamicMargin} />
      <Flex ref={barRef} {...barStyle}>
        <Button {...buttonNormalStyle}>
          <Icon as={MdFavorite} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>Likes</Text>
        </Button>
        <Button {...buttonNormalStyle}>
          <Icon as={MdListAlt} {...iconStyle} />
          <Text fontSize={{ base: 12, md: 18 }}>DIY</Text>
        </Button>
        <Button {...buttonActiveStyle}>
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
  )
}

export default BottomBar
