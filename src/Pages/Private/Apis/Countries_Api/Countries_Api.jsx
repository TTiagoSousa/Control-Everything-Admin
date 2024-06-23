import React from 'react';
import './Countries_Api.scss';
import { Link } from 'react-router-dom';

const Countries_Api = () => {
  return (
    <div className='Countries_Api'>
      <div className='Used_Api'>
        <Link target="_blank" to="https://restcountries.com/">https://restcountries.com/</Link>
      </div>
    </div>
  )
};

export default Countries_Api;