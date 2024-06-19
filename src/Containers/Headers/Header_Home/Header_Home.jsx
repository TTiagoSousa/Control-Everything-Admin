import React from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';

const Header_Home = () => {

  return (
    <header className='Header_Home'>
      <div className='Left_Side'></div>
      <div className='Middle'></div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
      </div>
    </header>
  )
};

export default Header_Home;
