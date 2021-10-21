import { useToast } from '@chakra-ui/toast'

const useMyToast = () => {
  const toast = useToast()
  const warningToast = (warningText, id) => {
    if (id) {
      if (!toast.isActive(id)) {
        return toast({
          id,
          title: warningText,
          position: 'bottom',
          status: 'warning',
          duration: 3000,
          isClosable: true
        })
      }
    }
    return toast({
      title: warningText,
      position: 'bottom',
      status: 'warning',
      duration: 3000,
      isClosable: true
    })
  }
  const errorToast = (errorText, id) => {
    if (id) {
      if (!toast.isActive(id)) {
        return toast({
          id,
          title: errorText,
          position: 'bottom',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
      }
    }
    return toast({
      title: errorText,
      position: 'bottom',
      status: 'error',
      duration: 3000,
      isClosable: true
    })
  }
  const successToast = (successText, id) => {
    if (id) {
      if (!toast.isActive(id)) {
        return toast({
          id,
          title: successText,
          position: 'bottom',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
      }
    }
    return toast({
      title: successText,
      position: 'bottom',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }
  const infoToast = (infoText, id) => {
    if (id) {
      if (!toast.isActive(id)) {
        return toast({
          id,
          title: infoText,
          position: 'bottom',
          status: 'info',
          duration: 3000,
          isClosable: true
        })
      }
    }
    return toast({
      title: infoText,
      position: 'bottom',
      status: 'info',
      duration: 3000,
      isClosable: true
    })
  }
  return { successToast, warningToast, infoToast, errorToast }
}

export default useMyToast
