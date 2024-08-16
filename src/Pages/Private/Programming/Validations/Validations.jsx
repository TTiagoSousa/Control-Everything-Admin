import React from 'react';
import './Validations.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Validations = () => {

  const { t } = useTranslation()

  return (
    <div className='Validations'>
      <div className='Validations_Functions'>
        {/* <div className='Card'>
          <span>{t('Sign in employee')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1bzhTfq_Z92YKDizDtnAmHNZ99NY_VEFaS2b6IPFTesE/edit?usp=drive_link"><span>Link</span></Link>
        </div> */}
      </div>
    </div>
  )
};

export default Validations;