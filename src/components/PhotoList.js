import React from 'react'
import { Grid } from '@chakra-ui/react'
import PhotoItem from './PhotoItem'
import Proptype from 'prop-types'

const PhotoList = ({ photos }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={2}>
      {photos &&
        photos.map(photo => {
          return <PhotoItem key={photo.id} photoUrl={photo.urls.regular} />
        })}
    </Grid>
  )
}

PhotoList.propTypes = {
  photos: Proptype.array
}

export default PhotoList
