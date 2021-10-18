import React from 'react'
import { Heading, VStack, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
const OthePage = () => {
  const history = useHistory()
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Choose Ingredients</Heading>
        <Button variant='default' onClick={() => history.push('/builder/done')}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default OthePage
