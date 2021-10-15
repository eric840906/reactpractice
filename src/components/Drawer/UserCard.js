import React from 'react'
import { Flex, Heading, Image, Text, Icon } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { MdEmail, MdAccountCircle } from 'react-icons/md'

const UserCard = () => {
  const userInfo = useSelector(state => state.auth.userInfo)
  return (
    <Flex bg='brand.100' padding={3} w='100%' gridGap={2} flexDirection='row'>
      {userInfo && (
        <Image
          boxSize={{ base: '80px', sm: '90px' }}
          objectFit='cover'
          borderRadius='100%'
          src={userInfo.getImageUrl()}
        />
      )}
      <Flex flexDirection='column' alignItems='baseline' justifyContent='end'>
        <Flex
          gridGap='5px'
          alignItems='center'
          w={{ base: '130px', sm: 'auto' }}
        >
          <Icon as={MdAccountCircle} w={5} h={5} />
          <Heading
            size='sm'
            alignSelf='flex-start'
            fontWeight='bold'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            overflow='hidden'
          >
            {userInfo && userInfo.getName() ? userInfo.getName() : 'Guest'}
          </Heading>
        </Flex>
        {userInfo && (
          <Flex
            gridGap='5px'
            alignItems='center'
            w={{ base: '130px', sm: 'auto' }}
          >
            <Icon as={MdEmail} w={5} h={5} />
            <Text textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>
              {userInfo.getEmail()}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default UserCard
