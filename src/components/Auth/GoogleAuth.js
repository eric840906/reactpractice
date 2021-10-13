import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../../actions'
import { Button } from '@chakra-ui/react'
import { MdLogin, MdLogout } from 'react-icons/md'

const GoogleAuth = () => {
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
  const authBtn = () => {
    return isSignedIn
      ? <Button {...buttonStyle} onClick={() =>window.auth.signOut()}><MdLogout size={25}/></Button>
      : <Button {...buttonStyle} onClick={() => window.auth.signIn()}><MdLogin size={25}/></Button>
      
  }
  useEffect(() => loadGoogleApi())
  return (
    <div>{ authBtn() }</div>
  )
}

export default GoogleAuth
