import { Grid, VStack } from '@chakra-ui/react'
import PhotoItem from './PhotoItem'
import Proptype from 'prop-types'

const PhotoList = ({ photos }) => {
  return (
    <VStack>
      <Grid templateColumns='repeat(3, 1fr)' gap={2}>
        {photos &&
          photos.map(photo => {
            return <PhotoItem key={photo.id} photoUrl={photo.urls.regular} />
          })}
      </Grid>
    </VStack>
  )
}

PhotoList.propTypes = {
  photos: Proptype.array
}

export default PhotoList
