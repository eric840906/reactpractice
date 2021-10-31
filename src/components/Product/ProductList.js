import React, { useState, useEffect } from 'react'
import { Grid, VStack, Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const filterBtns = ['all', 'sandwiches', 'burgers', 'snacks']
  useEffect(() => {
    if (filter === 'all') {
      return setFilteredProducts(products)
    } else {
      return setFilteredProducts(
        products.filter((product) => product.class === filter)
      )
    }
  }, [filter])
  const renderFilters = () =>
    filterBtns.map((item) => (
      <Button
        variant={filter === item ? 'active' : 'default'}
        textTransform="capitalize"
        onClick={() => setFilter(item)}
        value={item}
        key={item}
      >
        {item}
      </Button>
    ))
  const renderProducts = () => {
    if (filteredProducts) {
      return filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    }
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }
  return (
    <VStack>
      {/* <SectionDivider title="our products" /> */}
      <Grid
        bg="white"
        w="100%"
        position="sticky"
        zIndex={10}
        top="56px"
        templateColumns={{
          base: 'repeat(4, calc(50% - 20px))',
          md: 'repeat(4, 1fr)'
        }}
        overflowX={{ base: 'scroll', md: 'hidden' }}
        p={2}
        gridGap={1}
      >
        {renderFilters()}
      </Grid>
      <Grid
        w="100%"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
        gridGap={5}
      >
        {renderProducts()}
      </Grid>
    </VStack>
  )
}

ProductList.propTypes = {
  px: PropTypes.number,
  products: PropTypes.array
}

export default ProductList
