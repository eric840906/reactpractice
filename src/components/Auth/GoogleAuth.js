import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../../actions'
import { Button, useDisclosure } from '@chakra-ui/react'
import { MdLogin, MdLogout } from 'react-icons/md'
import { FaGoogle } from 'react-icons/fa'
import BasicDialog from '../Dialog'
const GoogleAuth = () => {
  const { onClose } = useDisclosure()
  const isSignedIn = useSelector(state => state.auth.isSignedIn)
  const dispatch = useDispatch()
  const onAuthChange = (SignedIn) => {
    return SignedIn ? dispatch(signIn(window.auth.currentUser.get().getBasicProfile())) : dispatch(signOut())
  }
  const loadGoogleApi = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '538589839273-gagq1rc99ksra0kv12rkftl3d9vmssf7.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        window.auth = window.gapi.auth2.getAuthInstance()
        onAuthChange(window.auth.isSignedIn.get())
        window.auth.isSignedIn.listen(onAuthChange)
      })
    })
  }
  const buttonStyle = {
    fontSize:"16px",
    borderRadius:"100",
    variant:"default",
    padding: 0
  }
  const modalOptions = {
    triggerBtn: {
      icon: () => <MdLogin size={25}/>
    }
  }
  // const authBtn = () => {
  //   return isSignedIn
  //     ? <Button {...buttonStyle} onClick={() =>window.auth.signOut()}><MdLogout size={25}/></Button>
  //     : <Button {...buttonStyle} onClick={() => window.auth.signIn()}><MdLogin size={25}/></Button>
      
  // }
  const authBtn = () => {
    return isSignedIn
      ? <Button w="40px" h="40px" {...buttonStyle} onClick={() =>window.auth.signOut()}><MdLogout size={25}/></Button>
      : <BasicDialog modalOptions={modalOptions}>
          <Button boxShadow="sm" w="80%" alignSelf="center" leftIcon={<FaGoogle/>} {...buttonStyle} onClick={() => window.auth.signIn()}>Log in with Google account</Button>
        </BasicDialog> 
      
  }
  useEffect(() => loadGoogleApi())
  return (
    <div>{ authBtn() }</div>
  )
}

export default GoogleAuth
