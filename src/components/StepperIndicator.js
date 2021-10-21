import { Flex, Text, Divider } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const StepperIndicator = ({
  icon,
  color,
  bgColor,
  lineWidth,
  title,
  borderColor
}) => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Divider
        variant='dashed'
        position='absolute'
        zIndex='-1'
        bg={bgColor}
        w={lineWidth}
        size='md'
      />
      <Flex
        borderWidth={1}
        borderStyle='dashed'
        borderColor={borderColor}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        borderRadius='100%'
        color={color}
        bg={bgColor}
        w='60px'
        h='60px'
      >
        {icon}
        <Text textTransform='capitalize' fontSize='12px'>
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}

StepperIndicator.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  lineWidth: PropTypes.string,
  title: PropTypes.string,
  borderColor: PropTypes.string
}

export default StepperIndicator
