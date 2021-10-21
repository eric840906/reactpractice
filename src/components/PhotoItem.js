import { Image, Flex } from '@chakra-ui/react'

import Proptype from 'prop-types'

class PhotoItem extends React.Component {
  constructor (props) {
    super(props)
    this.ImgRef = React.createRef()
    this.state = {
      imgHeight: null,
      gridRow: null
    }
  }

  componentDidMount = () => {
    this.ImgRef.current.addEventListener('load', () => {
      this.setState({
        gridRow: this.calculateGrid(this.ImgRef.current.clientHeight)
      })
    })
  }

  calculateGrid = height => {
    return Math.ceil(height / 250) > 1
      ? `${Math.ceil(height / 250) + 1} span`
      : '1 span'
  }

  render () {
    return (
      <Flex gridRow={this.state.gridRow}>
        <Image alignSelf='start' ref={this.ImgRef} src={this.props.photoUrl} />
      </Flex>
    )
  }
}

PhotoItem.propTypes = {
  photoUrl: Proptype.string
}

export default PhotoItem
