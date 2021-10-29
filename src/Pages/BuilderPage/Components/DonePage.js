import { useState, useEffect, useRef } from 'react'
import { Heading, VStack, Button, Flex, Input } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { FaBreadSlice } from 'react-icons/fa'
import { GiMeat } from 'react-icons/gi'
import {
  MdOutlineRestaurantMenu,
  MdEdit,
  MdOutlineAttachMoney
} from 'react-icons/md'
import { useSelector } from 'react-redux'
import LocalStorage from 'util/myLocalStorage'
import useMyToast from 'hooks/useMyToast'
// import { useDispatch } from 'react-redux'
const BlockStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  w: '80%',
  wordBreak: 'break-all'
}
const DonePage = () => {
  const nameInput = useRef(null)
  const history = useHistory()
  useEffect(() => {
    nameInput.current && nameInput.current.focus()
  }, [])
  const [name, setName] = useState('My Sandwich')
  const { chosenBread, chosenMeat, chosenSub } = useSelector(
    state => state.builder
  )
  const { errorToast, successToast } = useMyToast()
  const handleChange = e => setName(e.currentTarget.value)
  const saveMySandwich = () => {
    const mySandwichInfo = {
      name,
      bread: chosenBread.title,
      meat: chosenMeat.title,
      sub: chosenSub.map(item => item.title),
      price: chosenBread.price + chosenMeat.price,
      id:
        (LocalStorage.get('favorites') &&
          ++LocalStorage.get('favorites').length) ||
        1
    }
    if (!name) {
      errorToast('Name Your Sandwich')
      return
    }
    if (!LocalStorage.get('favorites')) {
      LocalStorage.set('favorites', [mySandwichInfo])
    } else {
      const current = LocalStorage.get('favorites')
      current.push(mySandwichInfo)
      LocalStorage.set('favorites', current)
    }
    successToast(`${mySandwichInfo.name} has been added on this device`)
    history.push('/')
  }
  return (
    <>
      <VStack gridGap={7} marginBottom={14}>
        <Heading textAlign='center' textTransform='capitalize'>
          Almost done!
        </Heading>
        <Flex {...BlockStyle}>
          <Flex color='brand.green'>
            <MdOutlineAttachMoney size={40} color='brand.green' />
          </Flex>
          ${chosenBread.price + chosenMeat.price}
        </Flex>
        <Flex {...BlockStyle}>
          <Flex color='brand.green'>
            <MdEdit size={40} color='brand.green' />
          </Flex>
          Give it a name
          <Input
            ref={nameInput}
            w={250}
            placeholder={name}
            onInput={handleChange}
            maxLength={20}
          />
        </Flex>
        <Flex {...BlockStyle}>
          <Flex color='brand.green'>
            <FaBreadSlice size={40} />
          </Flex>
          {chosenBread.title}
        </Flex>
        <Flex {...BlockStyle}>
          <Flex color='brand.green'>
            <GiMeat size={40} color='brand.green' />
          </Flex>
          {chosenMeat.title}
        </Flex>
        <Flex {...BlockStyle}>
          <Flex color='brand.green'>
            <MdOutlineRestaurantMenu size={40} color='brand.green' />
          </Flex>
          {chosenSub.map(item => item.title).join(', ')}
        </Flex>
        <Button w='80%' variant='success' onClick={saveMySandwich}>
          Done
        </Button>
      </VStack>
    </>
  )
}

export default DonePage
