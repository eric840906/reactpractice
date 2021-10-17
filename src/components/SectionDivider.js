import React from 'react'
import { Divider, Heading, Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const dividerHeadingStyle = {
  size: 'md',
  textTransform: 'capitalize',
  color: 'brand.gray',
  fontWeight: 'bold',
  marginBottom: 1
}

const SectionDivider = ({ title, px }) => {
  return (
    <Box w="100%" px={px}>
      <Heading {...dividerHeadingStyle}>{title}</Heading>
      <Divider variant="default" />
    </Box>
  )
}

SectionDivider.propTypes = {
  title: PropTypes.string,
  px: PropTypes.number
}

export default SectionDivider
