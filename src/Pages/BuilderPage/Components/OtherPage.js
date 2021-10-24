import { useState } from 'react'
import {
  Heading,
  VStack,
  Button,
  Grid,
  Image,
  Flex,
  Text,
  Box
} from '@chakra-ui/react'
import useMyToast from 'hooks/useMyToast'
import { FaCheck } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { ingredients, sauces } from 'demo/demoData'
import { useDispatch } from 'react-redux'
import { submitSub } from 'actions'

const Checkboxes = ({ data, selected, onClick }) => {
  return data.map((ingredient) => (
    <Flex
      flexDirection="column"
      key={ingredient.title}
      onClick={() => onClick(ingredient)}
      cursor="pointer"
    >
      <Box position="relative">
        <Flex
          w="100%"
          height="100%"
          position="absolute"
          bg="blackAlpha.800"
          display={
            selected.some((item) => item.id === ingredient.id) ? 'flex' : 'none'
          }
        >
          <Flex
            m="auto"
            borderRadius="100%"
            h={10}
            w={10}
            borderWidth={2}
            borderColor="brand.green"
            color="brand.green"
            justifyContent="center"
            alignItems="center"
          >
            <FaCheck size={25} />
          </Flex>
        </Flex>
        <Image flex={1} maxBlockSize="200px" src={ingredient.imageUrl} />
      </Box>
      <Text textTransform="capitalize">{ingredient.title}</Text>
    </Flex>
  ))
}

const OthePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const toastId = 'Limit-warning'
  const { warningToast } = useMyToast(toastId)
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedSauce, setSelectedSauce] = useState([])
  const onItemClick = (state, stateSetter, limit) => (clickedItem) => {
    const isSelected = state.some((item) => item.id === clickedItem.id)
    if (isSelected) {
      stateSetter(state.filter((item) => item.id !== clickedItem.id))
      return
    }
    if (state.length < limit) {
      stateSetter([...state, clickedItem])
    } else {
      warningToast(`You can't choose more than ${limit}`)
    }
  }
  const comfirmSub = () => {
    dispatch(submitSub([...selectedIngredients, ...selectedSauce]))
    return history.push('/builder/done')
  }
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Ingredients</Heading>
        <Grid templateColumns="repeat(3,1fr)" gridGap={2} padding={5}>
          <Checkboxes
            data={ingredients}
            selected={selectedIngredients}
            onClick={onItemClick(
              selectedIngredients,
              setSelectedIngredients,
              5
            )}
          />
        </Grid>
        <Heading>Sauces</Heading>
        <Grid templateColumns="repeat(3,1fr)" gridGap={2} padding={5}>
          <Checkboxes
            data={sauces}
            selected={selectedSauce}
            onClick={onItemClick(selectedSauce, setSelectedSauce, 1)}
          />
        </Grid>
        <Button variant="default" onClick={comfirmSub}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default OthePage
