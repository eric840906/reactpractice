import { Button, Flex, Box, Heading } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { useLocation } from "react-router-dom"
import useTitle from "../hooks/useTitle"
import GoogleAuth from "./Auth/GoogleAuth"

const TopBar = ({ onHamburgerClick }) => {
  const location = useLocation()
  console.log(location)
  const pageTitle = useTitle(location.pathname)
  return (
    <Flex boxShadow="md" bg="white" w="100%" justifyContent="space-between" p={2} color="white">
      <Button variant="default" borderRadius="100px" w="40px" h="40px" onClick={onHamburgerClick} size="sm">
        <HamburgerIcon w={5} h={5}/>
      </Button>
      <Flex alignSelf="center" color="black">
        <Heading color="brand.heading" size="md">{pageTitle}</Heading>
      </Flex>
      <GoogleAuth/>
    </Flex>
  )
}

export default TopBar