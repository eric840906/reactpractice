import { useState } from 'react'
import {
  Flex,
  Image,
  Heading,
  Text,
  Fade,
  List,
  Button,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import useMyToast from 'hooks/useMyToast'
import LocalStorage from 'util/myLocalStorage'
import { FaBreadSlice } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import {
  MdOutlineRestaurantMenu,
  MdAddShoppingCart,
  MdFavorite
} from 'react-icons/md'
import PropTypes from 'prop-types'
import { textOverflow } from 'assets/style'
import 'assets/style.css'

const maskStyle = {
  bg: 'blackAlpha.600',
  w: '100%',
  h: '100%',
  position: 'absolute',
  transition: '0.3s opacity ease-in-out',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  gridGap: 5
}

const ProductCard = ({ product }) => {
  const [showMask, setShowMask] = useState(false)
  const [isFav, setIsFav] = useState(
    product.id &&
      LocalStorage.get('favorites') &&
      LocalStorage.get('favorites').some((item) => item.id === product.id)
  )
  const { successToast } = useMyToast()
  const onHeartClick = () => {
    return isFav ? removeFromFav(product) : addToFav(product)
  }
  const addToFav = (product) => {
    if (!LocalStorage.get('favorites')) {
      LocalStorage.set('favorites', [product])
    } else {
      const current = LocalStorage.get('favorites')
      current.push(product)
      LocalStorage.set('favorites', current)
    }
    setIsFav(true)
    successToast(`${product.name} has been added to your list`)
  }
  const removeFromFav = (product) => {
    console.log('remove')
    const current = LocalStorage.get('favorites')
    LocalStorage.set(
      'favorites',
      current.filter((item) => item.id !== product.id)
    )
    setIsFav(false)
    successToast(`${product.name} has been removed from your list`)
  }
  return (
    <Flex
      borderRadius="10px"
      overflow="hidden"
      boxShadow="md"
      w="100%"
      onMouseEnter={() => setShowMask(true)}
    >
      <Fade
        className="fade-card"
        timeout={10}
        in={true}
        style={{ display: 'flex' }}
      >
        <Flex w="100%" bg="brand.100" position="relative">
          <Flex
            {...maskStyle}
            onMouseEnter={() => setShowMask(true)}
            onMouseLeave={() => setShowMask(false)}
            opacity={showMask ? 1 : 0}
          >
            <Button
              variant="default"
              w={{ base: '50px', sm: '75px' }}
              h={{ base: '50px', sm: '75px' }}
              touchAction={showMask ? 'all' : 'none'}
            >
              <MdAddShoppingCart fontSize="30px" color="brand.100" />
            </Button>
            <Button
              variant={isFav ? 'activeWithoutScale' : 'default'}
              w={{ base: '50px', sm: '75px' }}
              h={{ base: '50px', sm: '75px' }}
              touchAction={showMask ? 'all' : 'none'}
              onClick={onHeartClick}
            >
              <MdFavorite fontSize="30px" color="brand.100" />
            </Button>
          </Flex>
          <Image
            w={{ base: '100px', sm: '150px' }}
            objectFit="cover"
            src={
              product.imageUrl ||
              'https://image.freepik.com/free-vector/salami-sandwich_98292-3566.jpg'
            }
          />
          <Flex
            overflow="hidden"
            flexDirection="column"
            flex={1}
            px={3}
            py={{ base: 0, sm: 3 }}
            h={{ base: '100px', sm: '150px' }}
          >
            <Heading
              {...textOverflow}
              textTransform="capitalize"
              size={{ base: '12px', md: 'md' }}
            >
              {product.name}
            </Heading>
            <List fontSize={{ base: '14px', sm: '16px' }}>
              {product.bread && (
                <ListItem {...textOverflow}>
                  <ListIcon
                    as={FaBreadSlice}
                    fontSize={{ base: '14px', sm: '20px' }}
                  />
                  {product.bread}
                </ListItem>
              )}
              {product.meat && (
                <ListItem {...textOverflow}>
                  <ListIcon
                    as={GiMeat}
                    fontSize={{ base: '14px', sm: '20px' }}
                  />
                  {product.meat}
                </ListItem>
              )}
              {product.sub && (
                <ListItem {...textOverflow}>
                  <ListIcon
                    as={MdOutlineRestaurantMenu}
                    fontSize={{ base: '14px', sm: '20px' }}
                  />
                  {product.sub.join(', ')}
                </ListItem>
              )}
            </List>
            <Text
              textAlign="end"
              marginTop="auto"
              fontSize={{ base: '12px', sm: '20px' }}
            >
              {`$${product.price}`}
            </Text>
          </Flex>
        </Flex>
      </Fade>
    </Flex>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard
