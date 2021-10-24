import { SUBMIT_SUB, SUBMIT_BREAD, SUBMIT_MEAT } from 'actions/types'
const INITIAL_STATE = {
  chosenBread: null,
  chosenMeat: null,
  chosenSub: null
}
export const builderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_SUB:
      return { ...state, chosenSub: action.payload }
    case SUBMIT_MEAT:
      return { ...state, chosenMeat: action.payload }
    case SUBMIT_BREAD:
      return { ...state, chosenBread: action.payload }
    default:
      return state
  }
}
