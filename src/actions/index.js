import {
  SIGN_IN,
  SIGN_OUT,
  SUBMIT_BREAD,
  SUBMIT_MEAT,
  SUBMIT_SUB
} from './types'

export const signIn = (userInfo) => ({
  type: SIGN_IN,
  payload: userInfo
})
export const signOut = () => ({
  type: SIGN_OUT
})
export const submitBread = (breadInfo) => ({
  type: SUBMIT_BREAD,
  payload: breadInfo
})
export const submitMeat = (meatInfo) => ({
  type: SUBMIT_MEAT,
  payload: meatInfo
})
export const submitSub = (subInfo) => ({
  type: SUBMIT_SUB,
  payload: subInfo
})
