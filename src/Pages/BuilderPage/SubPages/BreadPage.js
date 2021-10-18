import React from 'react'
import { Heading, VStack, Button } from '@chakra-ui/react'
import { history } from '../../../Router/history'
const BreadPage = () => {
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Choose a bread</Heading>
        <Button variant='default' onClick={() => history.push('/builder/meat')}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default BreadPage
