import React from 'react';
import './Header_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Change_Language from '../../../Containers/Selectors/Change_Language/Change_Language';

const Header_Home = () => {

  const { typeOfNavifation, show_Mobile_Sidebar_Home } = NavsState();

  return (
    <header className='Header_Home'>
      <div className="Left_Side">
        
          {
            typeOfNavifation === 'Mobile_Menu' ?  (
              <div className={`Menu ${typeOfNavifation === 'Sidebar Home' ? 'With_SideBar' : ''}`}>
                <button
                  onClick={show_Mobile_Sidebar_Home}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              </div>
            ): <></>
          }
        <span>Control Everytinhg</span>
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Language />
        </div>
      </div>
    </header>
  )
}

export default Header_Home