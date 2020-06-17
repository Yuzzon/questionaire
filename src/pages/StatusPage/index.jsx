import React, { useState, useEffect } from 'react';
import { FormControlLabel } from '@material-ui/core';
import ProgressBar from '../../components/ProgressBar';
import NavigationBottom from '../../components/NavigationBottom';
import { FormWrap } from '../../components/FormWrap';
import { useHistory } from 'react-router-dom';
import { StyledCheckbox } from '../../components/StyledCheckbox';
import './styles.css'

const StatusPage = () => {
   const [values, setValues] = useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
   });
   const history = useHistory();
   useEffect(() => {
      if (localStorage.getItem('status')) {
         const objValues = JSON.parse(localStorage.getItem('status'));
         setValues(objValues)
      }
   }, [])
   const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.checked });
   };

   const onClickNext = () => {
      localStorage.setItem('status', JSON.stringify(values));
      if (Object.values(values).includes(true)) {
         history.push(`/confirm`);
      }
   }
   const onClickBack = () => {
      localStorage.setItem('status', JSON.stringify(values));
      if (localStorage.getItem('employment') !== 'selfEmployed') {
         history.push('/')
      }
      else {
         history.push('/proprietorships');
      }
   }
   const labelStyles = { padding: '12px 26px' }
   return (
      <>
         <ProgressBar value={75} />
         <div className="question-header">
            <h2>What best describes your filing status?</h2>
         </div>
         <FormWrap>
            <FormControlLabel
               style={labelStyles}
               control={<StyledCheckbox checked={values.checkedA} onChange={handleChange} name="checkedA" />}
               label="Single"
            />
            <FormControlLabel
               style={labelStyles}
               control={<StyledCheckbox checked={values.checkedB} onChange={handleChange} name="checkedB" />}
               label="Married filing jointly"
            />
            <FormControlLabel
               style={labelStyles}
               control={<StyledCheckbox checked={values.checkedC} onChange={handleChange} name="checkedC" />}
               label="Married filing separately"
            />
            <FormControlLabel
               style={labelStyles}
               control={<StyledCheckbox checked={values.checkedD} onChange={handleChange} name="checkedD" />}
               label="Head of Household"
            />
            <FormControlLabel
               style={labelStyles}
               control={<StyledCheckbox checked={values.checkedE} onChange={handleChange} name="checkedE" />}
               label="Qualifying widow(-er) with dependent child"
            />
         </FormWrap>


         <NavigationBottom
            backVisible={true}
            nextVisible={true}
            onClickNext={() => { onClickNext() }}
            onClickBack={() => { onClickBack() }}
         />
      </>
   );
};

export default StatusPage;
