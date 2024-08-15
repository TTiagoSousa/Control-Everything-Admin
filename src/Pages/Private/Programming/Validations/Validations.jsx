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
          <Link target="_blank" to="https://docs.google.com/document/d/1bzhTfq_Z92YKDizDtnAmHNZ99NY_VEFaS2b6IPFTesE/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Sign up user')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1PnpY1hgrDuc-82BjQUbg6ck_WiQWlG-4CrtU7Kl66qM/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Send email to recover password')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1PQ8P3h5_-vwodz1YP9TiDKTt54lQacOfF_EP3vI_jLo/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Sign in user')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/129n2hSu4mvduL38cn26GlpYcQgSFTx4vQsiLVI_Xa3M/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Create saving transition')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1mBoRmQJu6uy1iZgSNenId68dUBEbsNOKQuGkZPZ9n2Q/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Transfer savings to savings')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1nmy4TDckQRJ1y_J_ku7our7afwSADKvjOwzieUKo2eo/edit?usp=drive_link"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Update saving transition')}</span>
          <Link target="_blank" to="https://docs.google.com/document/d/136I5Dz7eNQK-tIr2U4pug6QJAOncoXiv5DUsvnawx0w/edit?usp=drive_link"><span>Link</span></Link>
        </div>
      </div>
    </div>
  )
};

export default Validations;