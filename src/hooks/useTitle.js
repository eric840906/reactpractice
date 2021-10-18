import { useState, useEffect } from 'react'

const useTitle = pathName => {
  const [pageTitle, setPageTitle] = useState('')
  useEffect(() => {
    const filterTitle = () => {
      switch (pathName.substring(1)) {
        case 'builder':
          return 'Sandwich builder'
        case 'menu':
          return 'Main menu'
        default:
          return "Loana's Sandwich"
      }
    }
    setPageTitle(filterTitle)
  }, [pathName])
  return pageTitle
}

export default useTitle
