import { useState, useEffect } from 'react'

const useTitle = pathName => {
  const [pageTitle, setPageTitle] = useState('')
  useEffect(() => {
    const filterTitle = () => {
      switch (pathName.split('/')[1]) {
        case 'builder':
          return 'Sandwich builder'
        case 'menu':
          return 'Main menu'
        case 'favorite':
          return 'Favorite List'
        default:
          return "Loana's Sandwich"
      }
    }
    setPageTitle(filterTitle)
  }, [pathName])
  return pageTitle
}

export default useTitle
