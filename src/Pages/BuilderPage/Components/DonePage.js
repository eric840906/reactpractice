import { Heading, VStack, Button, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { FaBreadSlice } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
const DonePage = () => {
  const history = useHistory()
  const { chosenBread, chosenMeat, chosenSub } = useSelector(
    state => state.builder
  )
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Finished!</Heading>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          w='80%'
          wordBreak='break-all'
        >
          <Flex color='brand.green'>
            <FaBreadSlice size={40} />
          </Flex>
          {chosenBread.title}
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          w='80%'
          wordBreak='break-all'
        >
          <Flex color='brand.green'>
            <GiMeat size={40} color='brand.green' />
          </Flex>
          {chosenMeat.title}
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          w='80%'
          wordBreak='break-all'
        >
          <Flex color='brand.green'>
            <MdOutlineRestaurantMenu size={40} color='brand.green' />
          </Flex>
          {chosenSub.map(item => item.title).join(', ')}
        </Flex>
        <Button variant='success' onClick={() => history.push('/')}>
          Done
        </Button>
      </VStack>
    </>
  )
}

export default DonePage
