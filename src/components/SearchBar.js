import {
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import Proptype from 'prop-types'

const SearchBar = () => {
  return (
    <form onSubmit={this.props.onSubmitTerm}>
      <FormControl padding={5}>
        <Stack>
          <InputGroup justifyContent='center'>
            <InputLeftAddon children={<SearchIcon />} />
            <Input
              width='80%'
              type='text'
              placeholder='Search'
              value={this.props.term}
              onChange={this.props.onTermChange}
            />
          </InputGroup>
        </Stack>
      </FormControl>
    </form>
  )
}

SearchBar.propTypes = {
  onSubmitTerm: Proptype.func,
  children: Proptype.node,
  term: Proptype.string,
  onTermChange: Proptype.func
}

export default SearchBar
