import React from 'react';
import ProgressBar from '../../components/ProgressBar';
import { BlueButton } from '../../components/RadioButton';
import './styles.css'
import NavigationBottom from '../../components/NavigationBottom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ConfirmationPage = () => {
   const history = useHistory();
   const handleSubmit = () => {
      //submit code to be here
   };
   const employment = useSelector(state => state.employment);
   const numberOfEmpl = Number(useSelector(state => state.proprietorships));
   const status = useSelector(state => state.status);

   const calcResult = () => {
      let res = 0;
      switch (employment) {
         case 'employed':
            res = 10
            break;
         case 'unemployed':
            res = 20
            break;
         case 'selfEmployed':
            res = 30
            break;
         default:
            res = 0
      }

      const arrOfVals = Object.values(status);
      const statusQty = arrOfVals.filter(el => el === true).length;

      if (statusQty === 1) {
         res += 10
      }
      else if (statusQty > 1) {
         res = res + (statusQty * 5)
      }
      if (employment === 'selfEmployed') {
         res = res * numberOfEmpl
      }

      return res
   }
   const onClickBack = () => {
      history.push('/status')
   }

   return (
      <>
         <ProgressBar value={100} />
         <div className="question-header">
            <h2>Ready to see your score?</h2>
            <h5>We value a freedom of choice. You can pick our pre-selected PRO specially for you or find one on your own. You decide.</h5>
         </div>
         <BlueButton className="submit-button" onClick={handleSubmit} name="a">
            <div className="button-label">
               <div className="button-left"><span className="round-chck"></span>TaxGig Hero</div>
               <div className="button-right">
                  <span className="button-right--top">Fixed price</span>
                  <span className="button-right--bot">${calcResult()}</span>
               </div>
            </div>
         </BlueButton>
         <BlueButton style={{ color: '#333848', backgroundColor: '#ffffff' }} className="submit-button" onClick={handleSubmit} name="a">
            <div className="button-label">
               <div className="button-left"><span className="round-chck"></span>Find another Pro</div>
            </div>
         </BlueButton>
         <NavigationBottom
            backVisible={true}
            nextVisible={false}
            onClickBack={() => { onClickBack() }}
         />
      </>
   );
};

export default ConfirmationPage;
