import React from 'react'
import { Flex, Heading, Button } from '@chakra-ui/react'

const BuilderBlock = () => {
  return (
    <Flex
      flexDirection='column'
      bg='brand.100'
      minH='240px'
      w='100%'
      justifyContent='center'
      alignItems='center'
      gridGap={5}
    >
      <Heading size='md'>Tired of normal choices?</Heading>
      <Heading size='md'>Make yourself a unique sandwich here!</Heading>
      <Button boxShadow='sm' w='50%' variant='default'>
        Make your own
      </Button>
    </Flex>
  )
}

export default BuilderBlock
