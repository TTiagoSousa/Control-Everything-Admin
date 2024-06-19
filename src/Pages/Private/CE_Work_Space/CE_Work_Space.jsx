import React from 'react';
import './CE_Work_Space.scss';
import Private_Routes from '../../../Routes/Private_Routes';
import Sidebar_Home from '../../../Containers/Home_Navigation/Sidebar_Home/Sidebar_Home';

const CE_Work_Space = () => {

  return (
    <>

      <Sidebar_Home />

      <div className='CE_Section'>
        <div className='Container'>
          <Private_Routes />
        </div>
      </div>
    </>
  )
};

export default CE_Work_Space;