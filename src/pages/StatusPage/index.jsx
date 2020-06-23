import React, { useState, useEffect } from 'react';
import { FormControlLabel } from '@material-ui/core';
import ProgressBar from '../../components/ProgressBar';
import NavigationBottom from '../../components/NavigationBottom';
import { FormWrap } from '../../components/FormWrap';
import { useHistory } from 'react-router-dom';
import { StyledCheckbox } from '../../components/StyledCheckbox';
import './styles.css'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setStatus } from '../../redux/actions';

const StatusPage = () => {
   const [values, setValues] = useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
   });
   const history = useHistory();
   const dispatch = useDispatch();
   const status = useSelector(state => state.status, shallowEqual);
   const employment = useSelector(state => state.employment, shallowEqual);
   useEffect(() => {
      if (Object.keys(status).length !== 0) {
         setValues(status)
      }
   }, [status])
   const handleChange = (event) => {
      const newVals = { ...values, [event.target.name]: event.target.checked }
      setValues(newVals);
      dispatch(setStatus(newVals))
   };

   const onClickNext = () => {
      if (Object.values(values).includes(true)) {
         history.push(`/confirm`);
      }
   }
   const onClickBack = () => {
      if (employment !== 'selfEmployed') {
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
