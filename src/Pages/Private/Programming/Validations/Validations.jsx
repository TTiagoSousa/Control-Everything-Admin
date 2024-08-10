import React from 'react';
import './Validations.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Validations = () => {

  const { t } = useTranslation()

  return (
    <div className='Validations'>
      <div className='Validations_Functions'>
        <div className='Card'>
          <span>{t('Sign in employee')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1qUhXftXPdI-7o6BzpHeVF3K3EQ7PsTZF_Ex5j6aWUrw/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Sign up user')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1l_rEO56soLYtemNOBGPt005rMih5l3-uRHFkloNZqpo/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Send email to recover password')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1zLgLU7if9P0cMxyPYqDI5mKu9hPIx_5mzx8PyCDsmIM/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Sign up user')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1l_rEO56soLYtemNOBGPt005rMih5l3-uRHFkloNZqpo/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Reset password user')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1y7UFNL3lQXREBF-cRa5wUH2HfOBqpdkyWmDXelUkMXI/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Create saving transition')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/13N-w4fyNGrDMvJ4iw4Wv9AjmyPpb4VT-FUFfPIs9agI/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Transfer savings to savings')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/16PIBfpFleVRVr_EM-BvEXqJ_lsfANAIAAIvhd-Se2ts/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Update saving transition')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1ThEVWfRB56AjjcmAtid5cNiuHZkygcTw3OYNbMT0s3Q/edit?usp=drive_link"><span>Link</span></Link>
        </div>
      </div>
    </div>
  )
};

export default Validations;