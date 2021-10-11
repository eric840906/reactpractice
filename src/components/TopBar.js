import { Button, Flex, Text, Box, Heading } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { useLocation } from "react-router-dom"
import useTitle from "../hooks/useTitle"

const TopBar = ({ onHamburgerClick }) => {
  const location = useLocation()
  console.log(location)
  const pageTitle = useTitle(location.pathname)
  return (
    <Flex bg="white" w="100%" justifyContent="space-between" p={2} color="white">
      <Button bg="white" onClick={onHamburgerClick} size="sm">
        <HamburgerIcon color="black" w={5} h={5}/>
      </Button>
      <Flex alignSelf="center" color="black">
        <Heading color="brand.heading" size="md">{pageTitle}</Heading>
      </Flex>
      <Button bg="white" pointerEvents="none" size="sm">
        <Box color="black" w={5} h={5}/>
      </Button>
    </Flex>
  )
}

export default TopBar