import React from 'react'
import { Flex, Heading, Button } from '@chakra-ui/react'

const BuilderBlock = () => {
  return (
    <Flex
      flexDirection="column"
      bg="brand.100"
      minH="240px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      padding={1.5}
      gridGap={5}
    >
      <Heading
        color="brand.heading"
        marginTop="auto"
        size="md"
        textAlign="center"
      >
        Tired of normal choices?
      </Heading>
      <Heading
        color="brand.heading"
        marginBottom="auto"
        size="md"
        textAlign="center"
      >
        Make yourself a unique sandwich here!
      </Heading>
      <Button marginBottom="20px" w="200px" variant="default">
        Make your own
      </Button>
    </Flex>
  )
}

export default BuilderBlock
