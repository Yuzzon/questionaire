import React, { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';
import NavigationBottom from '../../components/NavigationBottom';
import { useHistory } from 'react-router-dom';
import './styles.css'

const ProprietorshipsPage = () => {
   const [numbers, setNumbers] = useState('');
   const history = useHistory();
   useEffect(() => {
      if (numbers === '') {
         setNumbers(localStorage.getItem('proprietorships'))
      }
   }, [])
   const handleChange = (event) => {
      setNumbers(event.target.value);
   }
   const onClickNext = () => {
      if (numbers !== '') {
         localStorage.setItem('proprietorships', numbers)
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
