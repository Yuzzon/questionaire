import React from 'react';
import { Radio, withStyles, Button } from '@material-ui/core';

export const GreenRadio = withStyles({
   root: {
      color: '#61AD15',
      fontSize: '16px',
      lineHeight: '26px',
      '&$checked': {
         color: '#61AD15'
      },
      marginRight: '19px',
      fontFamily: 'Roboto, sans-serif'
   }
})((props) => <Radio color="default" {...props} />);

export const BlueButton = withStyles({
   root: {
      backgroundColor: '#6E5BE2',
      color: '#ffffff',
      fontSize: '16px',
      lineHeight: '26px',
      padding: '12px 24px 12px 28px;',
      marginBottom: '16px',
      fontFamily: 'Roboto, sans-serif',
      '&:hover': {
         backgroundColor: '#6E5BE2',
         color: '#ffffff',
         opacity: '0.9'
      }
   }
})((props) => <Button color="default" {...props} />);


