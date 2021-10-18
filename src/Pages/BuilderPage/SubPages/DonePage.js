import React from 'react'
import { Heading, VStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const DonePage = () => {
  // const history = useHistory()
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Choose Ingredients</Heading>
        <Button variant='success'>
          <Link to='/'>Done</Link>
        </Button>
      </VStack>
    </>
  )
}

export default DonePage
