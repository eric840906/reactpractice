import { useState, useEffect } from 'react'

const useResize = (el) => {
  const trackedElement = el
  const [elementLength, setElementLength] = useState(null)
  useEffect(() => {
    const windowResize = () =>
      trackedElement && setElementLength(trackedElement.current.clientHeight)
    window.addEventListener('resize', windowResize)
    return () => window.removeEventListener('resize', windowResize)
  }, [window.innerWidth])
  return [elementLength]
}

export default useResize
