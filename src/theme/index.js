import { extendTheme } from '@chakra-ui/react'
import brand from './Brand'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand
  },
  components: {
    Heading: {
      color: 'brand.heading'
    },
    Button: {
      variants: {
        default: {
          background: 'white',
          color: 'brand.gray',
          _hover: {
            background: 'brand.200',
            color: 'brand.100'
          },
          _active: {
            background: 'orange.700',
            color: 'orange.50',
            transform: 'scale(0.9)'
          }
        }
      }
    },
    Divider: {
      variants: {
        default: {
          background: 'brand.gray',
          borderColor: 'brand.gray',
          border: 1,
          borderWidth: '2px',
          height: '3px',
          borderRadius: '100px'
        }
      }
    }
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Quicksand'
  }
})

export default theme
