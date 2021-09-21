import { Box, Button } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

const TopBar = ({ onHamburgerClick }) => {
  return (
    <Box bg="gray.100" w="100%" p={2} color="white">
      <Button onClick={onHamburgerClick} size="sm">
        <HamburgerIcon color="black" w={5} h={5}/>
      </Button>
    </Box>
  )
}

export default TopBar