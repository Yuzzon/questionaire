import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './styles.css'
import ProgressBar from '../../components/ProgressBar';
import { RadioGroup, FormControlLabel } from '@material-ui/core';
import { FormWrap } from '../../components/FormWrap'
import { GreenRadio } from '../../components/RadioButton'
import NavigationBottom from '../../components/NavigationBottom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setEmployment } from '../../redux/actions';

const EmploymentPage = () => {
   const employment = useSelector(state => state.employment, shallowEqual);
   const dispatch = useDispatch()
   const history = useHistory();
   const [value, setValue] = useState('');
   const handleChange = (event) => {
      const val = event.target.value
      setValue(val);
      dispatch(setEmployment(val))
   };
   useEffect(() => {
      if (employment !== '') {
         setValue(employment)
      }
   }, [employment])

   const onClickNext = () => {
      if (value !== '') {
         value === 'selfEmployed' ?
            history.push('/proprietorships')
            :
            history.push('/status')
      }
   }

   return (
      <>
         <ProgressBar value={25} />
         <div className="question-header">
            <h2>What is your employment status?</h2>
         </div>
         <FormWrap component="fieldset" className="radio-group">
            <RadioGroup aria-label="employment" name="employment" value={value} onChange={handleChange}>
               <FormControlLabel value="employed" control={<GreenRadio />} label="Employed" />
               <FormControlLabel value="unemployed" control={<GreenRadio />} label="Unemployed" />
               <FormControlLabel value="selfEmployed" control={<GreenRadio />} label="Self employed" />
            </RadioGroup>
         </FormWrap>
         <NavigationBottom
            backVisible={false}
            nextVisible={true}
            onClickNext={() => { onClickNext() }}
         />
      </>
   );
};

export default EmploymentPage;
