import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from 'actions'
import { MdLogin, MdLogout } from 'react-icons/md'
import { FaGoogle } from 'react-icons/fa'
import BasicDialog from 'components/Dialog'
import useMyToast from 'hooks/useMyToast'
const GoogleAuth = () => {
  const { successToast, errorToast } = useMyToast()
  const isSignedIn = useSelector((state) => state.auth.isSignedIn)
  const dispatch = useDispatch()
  const onAuthChange = (SignedIn) => {
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
  const onAuthError = () => errorToast('something wrong')
  const onSignIn = async () => {
    try {
      await window.auth.signIn()
      const userName = window.auth.currentUser.get().getBasicProfile().getName()
      return successToast(`Welcome back, ${userName}!`)
    } catch (error) {
      onAuthError()
    }
  }
  const onSignOut = async () => {
    try {
      await window.auth.signOut()
      return successToast('Sign out successfully!')
    } catch (error) {
      onAuthError()
    }
  }
  const loginModalOptions = {
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
  const logoutModalOptions = {
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
  const authBtn = () => {
    return isSignedIn ? (
      <BasicDialog modalOptions={logoutModalOptions}></BasicDialog>
    ) : (
      <BasicDialog modalOptions={loginModalOptions}></BasicDialog>
    )
  }
  useEffect(() => loadGoogleApi())
  return <div>{authBtn()}</div>
}

export default GoogleAuth
