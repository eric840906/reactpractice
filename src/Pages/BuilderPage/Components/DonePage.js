import { Heading, VStack, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
const DonePage = () => {
  const history = useHistory()
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading>Finished!</Heading>
        <Button variant='success' onClick={() => history.push('/')}>
          Done
        </Button>
      </VStack>
    </>
  )
}

export default DonePage
