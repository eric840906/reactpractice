import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from 'actions'
import { useToast } from '@chakra-ui/react'
import { MdLogin, MdLogout } from 'react-icons/md'
import { FaGoogle } from 'react-icons/fa'
import BasicDialog from 'components/Dialog'
const GoogleAuth = () => {
  const toast = useToast()
  const isSignedIn = useSelector(state => state.auth.isSignedIn)
  const dispatch = useDispatch()
  const onAuthChange = SignedIn => {
    return SignedIn
      ? dispatch(signIn(window.auth.currentUser.get().getBasicProfile()))
      : dispatch(signOut())
  }
  const loadGoogleApi = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '538589839273-gagq1rc99ksra0kv12rkftl3d9vmssf7.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          window.auth = window.gapi.auth2.getAuthInstance()
          onAuthChange(window.auth.isSignedIn.get())
          window.auth.isSignedIn.listen(onAuthChange)
        })
    })
  }
  const onSignIn = async () => {
    await window.auth.signIn()
    const userName = window.auth.currentUser
      .get()
      .getBasicProfile()
      .getName()
    return toast({
      title: `Welcome back, ${userName}!`,
      position: 'top',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }
  const onSignOut = async () => {
    await window.auth.signOut()
    return toast({
      title: 'Sign out successfully!',
      position: 'top',
      status: 'error',
      duration: 9000,
      isClosable: true
    })
  }
  // const buttonStyle = {
  //   fontSize: '16px',
  //   borderRadius: '100',
  //   variant: 'default',
  //   alignSelf: 'center',
  //   boxShadow: 'none',
  //   padding: '10px'
  // }
  // const loginModalOptions = {
  //   triggerBtn: {
  //     icon: () => <MdLogin size={25} />
  //   }
  // }
  const loginModalOptions2 = {
    title: 'Sign in',
    triggerBtn: {
      icon: () => <MdLogin size={25} />
    },
    bodyBtns: [
      {
        title: 'Sign in with Google account',
        variant: 'default',
        icon: () => <FaGoogle />,
        onClick: () => onSignIn()
      }
    ]
  }
  // const logoutModalOptions = {
  //   title: 'Do you wish to sign out now?',
  //   triggerBtn: {
  //     icon: () => <MdLogout size={25} />
  //   }
  // }
  const logoutModalOptions2 = {
    title: 'Sign out now?',
    triggerBtn: {
      icon: () => <MdLogout size={25} />
    },
    footerBtns: [
      {
        title: 'Yes',
        variant: 'danger',
        onClick: () => onSignOut()
      }
    ]
  }
  // const authBtn = () => {
  //   return isSignedIn ? (
  //     <BasicDialog modalOptions={logoutModalOptions}>
  //       <Flex flexDirection="row" justifyContent="center" gridGap={5}>
  //         <Button variant="danger" onClick={() => window.auth.signOut()}>
  //           Yes, I want to sign out now
  //         </Button>
  //       </Flex>
  //     </BasicDialog>
  //   ) : (
  //     <BasicDialog modalOptions={loginModalOptions}>
  //       <Button
  //         leftIcon={<FaGoogle />}
  //         {...buttonStyle}
  //         onClick={() => onSignIn()}
  //       >
  //         Log in with Google account
  //       </Button>
  //     </BasicDialog>
  //   )
  // }
  const authBtn = () => {
    return isSignedIn ? (
      <BasicDialog modalOptions={logoutModalOptions2}></BasicDialog>
    ) : (
      <BasicDialog modalOptions={loginModalOptions2}></BasicDialog>
    )
  }
  useEffect(() => loadGoogleApi())
  return <div>{authBtn()}</div>
}

export default GoogleAuth
