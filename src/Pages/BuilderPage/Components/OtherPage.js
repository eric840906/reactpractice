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
const OthePage = () => {
  const history = useHistory()
  const toastId = 'Limit-warning'
  const { warningToast } = useMyToast(toastId)
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedSauce, setSelectedSauce] = useState([])
  const removeDuplicates = (data, key) => [
    ...new Map(data.map(item => [key(item), item])).values()
  ]
  const selectedMask = (ingredient, ingredientsState) => {
    return ingredientsState.some(item => item.id === ingredient.id)
      ? 'flex'
      : 'none'
  }
  const renderIngredients = (ingredients, ingredientsState, stateSetter) => {
    // const cancelSelect = (ingredient) => {
    //   if (ingredientsState.some(item => item.id === ingredient.id)) {
    //     return stateSetter(
    //       ingredientsState.filter(item => item.id !== ingredient.id)
    //     )
    //   }
    // }
    return ingredients.map(ingredient => (
      <Flex
        flexDirection='column'
        key={ingredient.title}
        onClick={() => {
          if (ingredientsState.length < 5) {
            if (ingredientsState.some(item => item.id === ingredient.id)) {
              return stateSetter(
                ingredientsState.filter(item => item.id !== ingredient.id)
              )
            }
            stateSetter(
              removeDuplicates(
                [...ingredientsState, ingredient],
                item => item.id
              )
            )
          } else {
            if (ingredientsState.some(item => item.id === ingredient.id)) {
              return stateSetter(
                ingredientsState.filter(item => item.id !== ingredient.id)
              )
            }
            warningToast("You can't choose more than 5", toastId)
          }
        }}
      >
        <Box position='relative'>
          <Flex
            w='100%'
            height='100%'
            position='absolute'
            bg='blackAlpha.800'
            display={selectedMask(ingredient, ingredientsState)}
          >
            <Flex
              m='auto'
              borderRadius='100%'
              h={10}
              w={10}
              borderWidth={2}
              borderColor='brand.green'
              color='brand.green'
              justifyContent='center'
              alignItems='center'
            >
              <FaCheck size={25} />
            </Flex>
          </Flex>
          <Image flex={1} maxBlockSize='200px' src={ingredient.imageUrl} />
        </Box>
        <Text textTransform='capitalize'>{ingredient.title}</Text>
      </Flex>
    ))
  }
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Ingredients</Heading>
        <Grid templateColumns='repeat(3,1fr)' gridGap={2} padding={5}>
          {renderIngredients(
            ingredients,
            selectedIngredients,
            setSelectedIngredients
          )}
        </Grid>
        <Heading>Sauces</Heading>
        <Grid templateColumns='repeat(3,1fr)' gridGap={2} padding={5}>
          {renderIngredients(sauces, selectedSauce, setSelectedSauce)}
        </Grid>
        <Button variant='default' onClick={() => history.push('/builder/done')}>
          Next
        </Button>
      </VStack>
    </>
  )
}

export default OthePage
