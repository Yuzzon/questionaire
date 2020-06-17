import React from 'react';
import { withStyles, Checkbox } from '@material-ui/core';

export const StyledCheckbox = withStyles({
   root: {
      color: '#61AD15',
      fontSize: '16px',
      lineHeight: '26px',
      padding: '9px 0',
      marginRight: '26px',
      fontFamily: 'Roboto, sans-serif',
      '&$checked': {
         color: '#61AD15'
      }
   }
})((props) => <Checkbox className='styled-checkbox' color="default" {...props} />);
