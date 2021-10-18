import React from 'react'
import { Heading, VStack, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
const MeatPage = () => {
  const history = useHistory()
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Choose a Meat</Heading>
        <Button
          variant='default'
          onClick={() => history.push('/builder/other')}
        >
          Next
        </Button>
      </VStack>
    </>
  )
}

export default MeatPage
