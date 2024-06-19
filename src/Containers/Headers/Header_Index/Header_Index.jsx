import React from 'react';
import './Header_Index.scss';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';

const Header_Index = () => {

  return (
    <header className='Header_Index'>
      <div className='Button_Field'>
        <Language_Selector />
      </div>
      <div className='Button_Field'>
        <Change_Theme />
      </div>
    </header>
  )
};

export default Header_Index;