import React from 'react';
import './Apis_Dashboard.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Apis_Dashboard = () => {

  const { t } = useTranslation();

  return (
    <div className='Apis_Dashboard'>
      <div className='Apis_List'>
        <div className='Card'>
          <span>{t('Currencies Api')}</span>
          <Link to="Currencies_Api"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Countries Api')}</span>
          <Link to="Countries_Api"><span>Link</span></Link>
        </div>
        <div className='Card'>
          <span>{t('Crypto Api')}</span>
          <Link to="Crypto_Api"><span>Link</span></Link>
        </div>
      </div>
    </div>
  )
};

export default Apis_Dashboard;