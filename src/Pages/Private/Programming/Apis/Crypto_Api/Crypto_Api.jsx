import React from 'react';
import './Crypto_Api.scss';
import { Link } from 'react-router-dom';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';

const Crypto_Api = () => {

  const { t } = useTranslation();

  return (
    <div className='Crypto_Api'>

      <div className="Alert">
        <Mui_Alert />
      </div>

      <div className='Used_Api'>
        <Link target="_blank" to="https://coinranking.com/">https://coinranking.com/</Link>
      </div>
    </div>
  )
};

export default Crypto_Api;