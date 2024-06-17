import React from 'react';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';

const Index = () => {

  return (
    <div className='Index'>
      <div>
        <Global_Button
          Text={("Sign In")}
          to="Sign_In"
        />
      </div>
    </div>
  )
};

export default Index;
