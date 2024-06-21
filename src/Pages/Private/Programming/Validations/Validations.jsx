import React from 'react';
import './Validations.scss';
import { Link } from 'react-router-dom';

const Validations = () => {
  return (
    <div className='Validations'>
      <div className='Validations_Functions'>
        <div className='Card'>
          <span>Sign in employee</span>
          <Link target="_blank" to="https://docs.google.com/document/d/1qUhXftXPdI-7o6BzpHeVF3K3EQ7PsTZF_Ex5j6aWUrw/edit?usp=drive_link"><span>Link</span></Link>
        </div>
      </div>
    </div>
  )
};

export default Validations;