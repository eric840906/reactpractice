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
          boxShadow: 'md',
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
        },
        danger: {
          background: 'brand.pink',
          boxShadow: 'md',
          color: 'red.50',
          _hover: {
            background: 'red.500',
            color: 'white'
          },
          _active: {
            background: 'red.700',
            color: 'white',
            transform: 'scale(0.9)'
          }
        },
        success: {
          background: 'brand.green',
          boxShadow: 'md',
          color: 'green.50',
          _hover: {
            background: 'green.500',
            color: 'white'
          },
          _active: {
            background: 'green.700',
            color: 'white',
            transform: 'scale(0.9)'
          }
        },
        active: {
          background: 'brand.200',
          color: 'orange.50',
          transform: 'scale(0.9)'
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
