import { SIGN_IN, SIGN_OUT } from './types'

export const signIn = userInfo => ({
  type: SIGN_IN,
  payload: userInfo
})
export const signOut = () => ({
  type: SIGN_OUT
})
