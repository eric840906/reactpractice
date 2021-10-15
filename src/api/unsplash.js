import axios from 'axios'

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID qFtoahC-KtR9mVMMvIfDsPOzGClpGaL14kces9mpI4A'
  }
})

export const getPhotos = async term => {
  const {
    data: { results }
  } = await unsplash.get('/search/photos', {
    params: {
      query: term
    }
  })
  return results
}
