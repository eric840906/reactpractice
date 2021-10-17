import React from 'react'
import { Flex, Image, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { textOverflow } from '../../assets/style'

const ProductCard = ({ product }) => {
  return (
    <Flex
      borderRadius="10px"
      overflow="hidden"
      bg="brand.100"
      flexDirection="row"
      boxShadow="md"
    >
      <Image
        boxSize={{ base: '100px', sm: '150px' }}
        objectFit="cover"
        src={product.imageUrl}
      />
      <Flex
        overflow="hidden"
        flexDirection="column"
        p={3}
        h={{ base: '100px', sm: '150px' }}
      >
        <Heading
          {...textOverflow}
          textTransform="capitalize"
          size={{ base: '12px', md: 'md' }}
        >
          {product.title}
        </Heading>
        <Text {...textOverflow}>{product.ingredients.join(', ')}</Text>
        <Text textAlign="end" marginTop="auto">
          {`$${product.price}`}
        </Text>
      </Flex>
    </Flex>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard
