import React from 'react';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';

const Index = () => {
  return (
    <div className='Index'>

      <div className="Button_Field">
        <Global_Button 
          text='Login'
        />
      </div>

    </div>
  )
};

export default Index;