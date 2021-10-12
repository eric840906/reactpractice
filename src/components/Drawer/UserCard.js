import React from "react";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import { IoIosLogIn } from 'react-icons/io'

const UserCard = () => {
  return (
    <Flex bg="brand.100" padding={5} w="100%" justifyContent="space-around" flexDirection="row">
      <Image boxSize={{base: '80px', sm: '100px'}} objectFit="cover" borderRadius="100%" src="https://i.pinimg.com/originals/8c/67/69/8c6769e0323ffa6e7aadf98ddf34d5fe.jpg"/>
      <Flex flexDirection="column" justifyContent="space-between" alignItems="center"> 
        <Heading size="sm" alignSelf="flex-start" fontWeight="bold">Guest</Heading>
        <Button fontSize="16px" borderRadius="100" boxShadow="md" w={{base: "100px", sm: "150px"}} variant="default" leftIcon={<IoIosLogIn size={20} />}> 
          Log in
        </Button>
      </Flex>
    </Flex>
  )
}

export default UserCard