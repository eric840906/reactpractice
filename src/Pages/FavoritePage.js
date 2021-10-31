import { useState } from 'react'
import { VStack, Grid } from '@chakra-ui/react'
import LocalStorage from 'util/myLocalStorage'
const FavoritePage = () => {
  const [favorites] = useState(LocalStorage.get('favorites') || null)
  return (
    <VStack>
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
        {favorites.map((item) => item.name)}
      </Grid>
    </VStack>
  )
}

export default FavoritePage
