import { SET_EMPLOYMENT, SET_PROPRIETORSHIPS, SET_STATUS } from './types'

export const setEmployment = payload => {
   return {
      type: SET_EMPLOYMENT,
      payload
   }
}
export const setProprietorships = payload => {
   return {
      type: SET_PROPRIETORSHIPS,
      payload
   }
}
export const setStatus = payload => {
   return {
      type: SET_STATUS,
      payload
   }
}
