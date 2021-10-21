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
  const ingredients = [
    {
      title: 'tomatoes',
      imageUrl:
        'https://images.unsplash.com/photo-1583619669761-04b909293bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      id: 1
    },
    {
      title: 'pickles',
      imageUrl:
        'https://images.unsplash.com/photo-1598998834343-58348a9e150e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 2
    },
    {
      title: 'cucumbers',
      imageUrl:
        'https://images.unsplash.com/photo-1567427013572-f3d0764bf7ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 3
    },
    {
      title: 'jalapeño',
      imageUrl:
        'https://images.unsplash.com/photo-1624204924112-1b5f9847399c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 4
    },
    {
      title: 'lettuce',
      imageUrl:
        'https://images.unsplash.com/photo-1629984854631-d5bfff4e46b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
      id: 5
    },
    {
      title: 'onion',
      imageUrl:
        'https://images.unsplash.com/photo-1590126865724-e00385b22bf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 6
    },
    {
      title: 'spinach',
      imageUrl:
        'https://images.unsplash.com/photo-1515363578674-99f41329ab4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80',
      id: 7
    },
    {
      title: 'avocado',
      imageUrl:
        'https://images.unsplash.com/photo-1611255154360-b86b81cfad4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1515&q=80',
      id: 8
    },
    {
      title: 'olive',
      imageUrl:
        'https://media.istockphoto.com/photos/marinated-slices-black-olives-isolated-on-white-background-top-view-picture-id982436276?b=1&k=20&m=982436276&s=170667a&w=0&h=Pf4xz0zhh1DK0s-u2X4NtQlCzAI-UncyxlNOfxSvMzI=',
      id: 9
    }
  ]
  const sauces = [
    {
      title: 'mustard',
      imageUrl:
        'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 1
    },
    {
      title: 'sausa',
      imageUrl:
        'https://images.unsplash.com/photo-1575919159574-e49dc9e1228f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 2
    },
    {
      title: 'pepper sauce',
      imageUrl:
        'https://images.unsplash.com/photo-1589589357592-5e3f7be30857?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      id: 3
    },
    {
      title: 'mayonnaise',
      imageUrl:
        'https://media.istockphoto.com/photos/mayonnaise-in-a-glass-jar-with-a-spoon-on-white-wooden-boards-picture-id1264553346?b=1&k=20&m=1264553346&s=170667a&w=0&h=vZzKOhQRGnJv-1VRVQcLm7z1b3Kar1spQh-3kgOslAg=',
      id: 4
    }
  ]
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
