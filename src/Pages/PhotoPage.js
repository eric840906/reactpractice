import SearchBar from '../components/SearchBar'
import PhotoList from '../components/PhotoList'
import { VStack } from "@chakra-ui/react"
import { getPhotos } from '../api/unsplash'
import React, {useState} from 'react';

const PhotoPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [photos, setPhotos] = useState([])
  const termChange = e => {
    setSearchTerm(e.target.value)
  }
  const submitTerm = async(e) => {
    e.preventDefault();
    const photos = await getPhotos(searchTerm)
    setPhotos(photos)
  }
  return (
    <>
      <VStack>
        <SearchBar onTermChange={termChange} onSubmitTerm={submitTerm} term={searchTerm} />
        <PhotoList photos={photos}/>
      </VStack>
    </>
  )
}

export default PhotoPage;
