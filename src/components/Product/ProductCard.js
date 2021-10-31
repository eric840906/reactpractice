import {
  Flex,
  Image,
  Heading,
  Text,
  Fade,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { FaBreadSlice } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import PropTypes from 'prop-types'
import { textOverflow } from 'assets/style'
import 'assets/style.css'

const ProductCard = ({ product }) => {
  return (
    <Flex borderRadius="10px" overflow="hidden" boxShadow="md" w="100%">
      <Fade
        className="fade-card"
        timeout={10}
        in={true}
        style={{ display: 'flex' }}
      >
        <Flex w="100%" bg="brand.100">
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
              {/* {product.price && (
                <ListItem {...textOverflow}>{`$${product.price}`}</ListItem>
              )} */}
            </List>
            {/* <Text {...textOverflow}>{product.bread}</Text>
            <Text {...textOverflow}>{product.meat}</Text>
            <Text {...textOverflow}>{product.sub.join(', ')}</Text> */}

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
