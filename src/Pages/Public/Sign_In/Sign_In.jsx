import React from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import GLobal_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';

const Sign_In = () => {

  const { t } = useTranslation();

  return (
    <div className='Sign_In'>
      <form>
        <div className='Title'>
          <h1>{t('Sign in')}</h1>
        </div>
        <div className="Input_Field">
          <GLobal_Input
            Text={t("Employee number")}
            Type="number"
          />
        </div>
        <div className="Input_Field">
          <GLobal_Input 
            Text={t("Email")}
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <GLobal_Input 
            Text={t("Password")}
            Type="password"
          />
        </div>
        <div className="Button_Field">
          <Global_Button 
            Text={t("Sign In")}
          />
        </div>
      </form>
    </div>
  )
};

export default Sign_In;
