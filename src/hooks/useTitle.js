import {useState, useEffect} from 'react'

const useTitle =  (pathName) => {
  const [pageTitle, setPageTitle] = useState('')
  useEffect(() => {
    const filterTitle = pathName.substring(1) ? pathName.substring(1) : "Loana's Sandwich"
    setPageTitle(filterTitle)
  }, [pathName])
  return pageTitle
}

export default useTitle