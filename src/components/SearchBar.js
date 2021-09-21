import {
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitTerm}>
        <FormControl padding={5}>
          <Stack>
            <InputGroup justifyContent="center">
              <InputLeftAddon children={<SearchIcon/>} />
              <Input width="80%" type="text" placeholder="Search" value={this.props.term} onChange={this.props.onTermChange}/>
            </InputGroup>
          </Stack>
        </FormControl>
      </form>
    )
  }
}

export default SearchBar