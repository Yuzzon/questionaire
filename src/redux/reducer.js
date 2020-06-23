import { SET_EMPLOYMENT, SET_PROPRIETORSHIPS, SET_STATUS } from './types';


const inititalState = {
   employment: '',
   proprietorships: '',
   status: {}
}

export default (state = inititalState, action) => {
   switch (action.type) {
      case SET_EMPLOYMENT:
         return {
            ...state,
            employment: action.payload
         }
      case SET_PROPRIETORSHIPS:
         return {
            ...state,
            proprietorships: action.payload
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.payload
         }
      default:
         return state;
   }
}
