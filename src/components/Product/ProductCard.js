import React from 'react'
import { Flex, Image, Heading, Text, Fade } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { textOverflow } from '../../assets/style'
import '../../assets/style.css'

const ProductCard = ({ product }) => {
  return (
    <Flex borderRadius='10px' overflow='hidden' boxShadow='md' w='100%'>
      <Fade
        className='fade-card'
        timeout={10}
        in={true}
        style={{ display: 'flex' }}
      >
        <Flex w='100%' bg='brand.100'>
          <Image
            boxSize={{ base: '100px', sm: '150px' }}
            objectFit='cover'
            src={product.imageUrl}
          />
          <Flex
            overflow='hidden'
            flexDirection='column'
            flex={1}
            p={3}
            h={{ base: '100px', sm: '150px' }}
          >
            <Heading
              {...textOverflow}
              textTransform='capitalize'
              size={{ base: '12px', md: 'md' }}
            >
              {product.title}
            </Heading>
            <Text {...textOverflow}>{product.ingredients.join(', ')}</Text>
            <Text textAlign='end' marginTop='auto'>
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
