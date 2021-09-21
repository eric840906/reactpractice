import { Grid } from "@chakra-ui/react"
import PhotoItem from './PhotoItem'

const PhotoList = ({ photos }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      {
        photos && photos.map(photo => {
          return (
            <PhotoItem key={photo.id} photoUrl={photo.urls.regular}/>
          )
        })
      }
    </Grid>
  )
}

export default PhotoList