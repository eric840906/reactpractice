import { extendTheme } from "@chakra-ui/react"
import brand from './Brand'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand
  },
  fonts: {
    heading: 'Heading'
  }
})

export default theme