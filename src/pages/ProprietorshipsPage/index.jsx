import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';
import NavigationBottom from '../../components/NavigationBottom';
import { useHistory } from 'react-router-dom';
import './styles.css'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setProprietorships } from '../../redux/actions';

const ProprietorshipsPage = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const storedNum = useSelector(state => state.proprietorships, shallowEqual);
   const [numbers, setNumbers] = useState('');
   useEffect(() => {
      if (storedNum !== '') {
         setNumbers(storedNum)
      }
   }, [storedNum])
   const handleChange = (event) => {
      const val = event.target.value;
      setNumbers(val);
      dispatch(setProprietorships(val));
   }
   const onClickNext = () => {
      if (numbers !== '') {
         history.push(`/status`)
      }
   }
   const onClickBack = () => {
      history.push(`/`)
   }
   return (
      <>
         <ProgressBar value={50} />
         <h2 className="question-header">How many separate sole proprietorships do you operate?</h2>
         <div className="input-wrap">
            <p className="input-label">Please Enter a quantity</p>
            <input type="number" className="input-numbers" value={numbers} onChange={(e) => { handleChange(e) }} placeholder="1" />
         </div>
         <NavigationBottom
            backVisible={true}
            nextVisible={true}
            onClickNext={() => { onClickNext() }}
            onClickBack={() => { onClickBack() }}
         />
      </>
   );
};

export default ProprietorshipsPage;
