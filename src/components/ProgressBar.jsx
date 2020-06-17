import React from 'react';
import { LinearProgress, withStyles } from '@material-ui/core';

const CustomLinearProgress = withStyles(() => ({
   root: {
      height: 4
   },
   colorPrimary: {
      backgroundColor: '#ffffff',
   },
   bar: {
      backgroundColor: '#61AD15;',
   },
}))(LinearProgress);

const ProgressBar = (props) => {
   return (
      <>
         <CustomLinearProgress variant="determinate" {...props} />
      </>
   );
};

export default ProgressBar;
