import {FormControl, withStyles} from '@material-ui/core'

export const FormWrap = withStyles({
   root: {
      border: '1px solid #e7e9f0',
      boxShadow: '0px 4px 8px rgba(41, 47, 66, 0.07)',
      borderRadius: '4px'
   }
})(FormControl)
