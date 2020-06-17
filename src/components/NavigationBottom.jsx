import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import icon from '../assets/right-icon.svg'

const NextButton = withStyles({
   root: {
      marginRight: '160px',
      height: '48px',
      backgroundColor: '#61AD15',
      padding: '11px 24px',
      color: '#ffffff',
      fontSize: '16px',
      fontStyle: 'normal',
      textTransform: 'none',
      fontWeight: '400',
      boxShadow: '0px 2px 4px rgba(73, 129, 18, 0.3)',
      border: '0.5px solid #518B18;',
      borderRadius: '4px',
      '&:hover': {
         backgroundColor: '#61AD15',
         color: '#ffffff',
         opacity: '0.95'
      }
   }
})(Button)

const BackButton = withStyles({
   root: {
      marginLeft: '160px',
      height: '48px',
      backgroundColor: '#ffffff',
      padding: '11px 24px',
      color: '#5D606B',
      fontSize: '16px',
      fontStyle: 'normal',
      textTransform: 'none',
      fontWeight: '400',
      fontFamily: 'Roboto, sans-serif',
      boxShadow: '0px 2px 4px rgba(133, 136, 146, 0.12)',
      border: '1px solid #E7E9F0',
      borderRadius: '4px',
      '&:hover': {
         backgroundColor: 'rgba(0, 0, 0, 0.06)',
      }
   }
})(Button)

const NavigationBottom = ({backVisible, nextVisible, onClickBack, onClickNext}) => {
   const imgStyles = { width: '12px', height: '12px', marginLeft: '14px' };
   const showBack = backVisible ? {} : { visibility: 'hidden' };
   const showNext = nextVisible ? {} : { visibility: 'hidden' };
   return (
      <div className="navigation-buttons">
         <BackButton style={showBack} onClick={onClickBack}>Back</BackButton>
         <NextButton style={showNext} onClick={onClickNext}>
            Next step
            <img style={imgStyles} src={icon} alt="arrow-right"></img>
         </NextButton>
      </div>
   );
};

export default NavigationBottom;
