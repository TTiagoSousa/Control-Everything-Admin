import React from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Components/Selectores/Change_Theme/Change_Theme';
import Language_Selector from '../../../Components/Selectores/Language_Selector/Language_Selector';
import { NavsState } from '../../../Context/Navs_Context';

const Header_Home = () => {

  const { typeOfNavifation, show_Mobile_Sidebar_Home } = NavsState();

  return (
    <header className='Header_Home'>
      <div className="Left_Side">
        <div className='Menu'>
          {
            typeOfNavifation === 'Mobile_Menu' ?  (
              <button
                onClick={show_Mobile_Sidebar_Home}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            ): <></>
          }
        </div>
      </div>
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
