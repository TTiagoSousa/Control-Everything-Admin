import React from 'react';
import './Currencies_Api.scss';
import { Link } from 'react-router-dom';

const Currencies_Api = () => {
  return (
    <div className='Currencies_Api'>
      <div className='Used_Api'>
        <Link target="_blank" to="https://currencybeacon.com/">https://currencybeacon.com/</Link>
      </div>
    </div>
  )
};

export default Currencies_Api;