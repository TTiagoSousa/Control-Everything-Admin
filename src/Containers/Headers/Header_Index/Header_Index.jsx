import React from 'react';
import './Header_Index.scss';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';

const Header_Index = () => {

  return (
    <header className='Header_Index'>
      <div className='Button_Field'>
        <Language_Selector />
      </div>
    </header>
  )
};

export default Header_Index;